
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Trash2, Loader2 } from 'lucide-react';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { formatDistanceToNow } from 'date-fns';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface CommentSectionProps {
  photoId: string;
  user: User | null;
}

interface Comment {
  id: string;
  content: string;
  created_at: string;
  user_id: string;
  profiles: {
    username: string;
    avatar_url: string | null;
  };
}

const CommentSection = ({ photoId, user }: CommentSectionProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      comment: '',
    },
  });

  const fetchComments = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('photo_comments')
        .select(`
          id, 
          content, 
          created_at, 
          user_id, 
          profiles:profiles(username, avatar_url)
        `)
        .eq('photo_id', photoId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setComments(data || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch comments
  useEffect(() => {
    fetchComments();

    // Set up realtime subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'photo_comments',
          filter: `photo_id=eq.${photoId}`,
        },
        () => {
          fetchComments();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [photoId]);

  const onSubmit = async (values: { comment: string }) => {
    if (!user) {
      toast({
        title: 'Authentication required',
        description: 'Please log in to comment',
        variant: 'default',
        duration: 3000,
      });
      return;
    }

    if (!values.comment.trim()) return;

    setSubmitLoading(true);
    try {
      const { error } = await supabase.from('photo_comments').insert({
        photo_id: photoId,
        user_id: user.id,
        content: values.comment.trim(),
      });

      if (error) throw error;
      
      form.reset();
      toast({
        title: 'Comment added',
        description: 'Your comment has been posted successfully',
        duration: 3000,
      });
    } catch (error: any) {
      console.error('Error adding comment:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to add comment',
        variant: 'destructive',
        duration: 3000,
      });
    } finally {
      setSubmitLoading(false);
    }
  };

  const deleteComment = async (commentId: string) => {
    try {
      const { error } = await supabase
        .from('photo_comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', user?.id || '');

      if (error) throw error;
      
      toast({
        title: 'Comment deleted',
        description: 'Your comment has been removed',
        duration: 3000,
      });
    } catch (error: any) {
      console.error('Error deleting comment:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete comment',
        variant: 'destructive',
        duration: 3000,
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2 text-festival-maroon dark:text-festival-golden">
        <MessageCircle size={18} />
        Comments ({comments.length})
      </h3>

      {user ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Add a comment..."
                      className="resize-none border-festival-golden/30 focus:border-festival-golden focus:ring focus:ring-festival-golden/20"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button 
                type="submit"
                disabled={submitLoading}
                className="bg-festival-maroon hover:bg-festival-maroon/90 text-white dark:bg-festival-golden dark:hover:bg-festival-golden/90 dark:text-festival-maroon"
              >
                {submitLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                ) : (
                  <MessageCircle size={16} className="mr-2" />
                )}
                Post Comment
              </Button>
            </div>
          </form>
        </Form>
      ) : (
        <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-md text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Please log in to add a comment
          </p>
          <Button 
            variant="link"
            onClick={() => window.location.href = '/auth'}
            className="text-festival-maroon dark:text-festival-golden mt-1"
          >
            Log In / Sign Up
          </Button>
        </div>
      )}

      <div className="space-y-4 mt-6">
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin text-gray-500" />
          </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <div
              key={comment.id}
              className="p-3 bg-white dark:bg-gray-800/50 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={comment.profiles?.avatar_url || undefined}
                      alt={comment.profiles?.username || "User"}
                    />
                    <AvatarFallback>
                      {comment.profiles?.username ? comment.profiles.username.charAt(0).toUpperCase() : "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{comment.profiles?.username || "User"}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                
                {user && user.id === comment.user_id && (
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Comment</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this comment? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteComment(comment.id)}
                          className="bg-red-600 text-white hover:bg-red-700"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                )}
              </div>
              
              <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line break-words">
                {comment.content}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No comments yet</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">Be the first to share your thoughts</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
