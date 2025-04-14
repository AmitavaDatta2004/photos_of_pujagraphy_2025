
import { Trophy, Medal, Award } from 'lucide-react';

const WinnersSection = () => {
  return (
    <section id="winners" className="py-20">
      <div className="festival-container">
        <h2 className="section-title">Results & Winners</h2>
        <p className="section-subtitle">Celebrating excellence in Puja photography</p>
        
        <div className="max-w-3xl mx-auto mb-16">
          <div className="card-festive p-8 text-center">
            <Trophy size={48} className="text-festival-golden mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-festival-maroon mb-3">Winners Announcement Pending</h3>
            <p className="text-gray-600">
              The competition is currently ongoing. Winners will be announced after the judging process is complete.
              Check back here after June 1st, 2025 to see the winning photographs and honorable mentions.
            </p>
          </div>
        </div>
        
        {/* Best of Best */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center text-festival-maroon mb-6">Grand Prize - Best of Best</h3>
          <div className="card-festive overflow-hidden text-center p-6">
            <div className="inline-block bg-gradient-to-r from-festival-golden via-festival-red to-purple-500 p-3 rounded-full mb-4">
              <Award size={40} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-festival-maroon mb-2">Best of Best Prize</h3>
            <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
              <p className="text-gray-500">Winner to be announced</p>
            </div>
            <p className="text-sm text-gray-600">Exclusive professional photography equipment package + Feature in Utsab Unites exhibition</p>
          </div>
        </div>
        
        {/* Mobile Captures Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-festival-maroon mb-6">Mobile Captures Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-festive overflow-hidden text-center p-6">
              <div className="inline-block bg-festival-golden p-3 rounded-full mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">1st Prize</h3>
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
                <p className="text-gray-500">Winner to be announced</p>
              </div>
              <p className="text-sm text-gray-600">Premium smartphone + accessories package</p>
            </div>
            
            <div className="card-festive overflow-hidden text-center p-6">
              <div className="inline-block bg-[#C0C0C0] p-3 rounded-full mb-4">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">2nd Prize (2 Winners)</h3>
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
                <p className="text-gray-500">Winners to be announced</p>
              </div>
              <p className="text-sm text-gray-600">Mobile photography masterclass & accessory kit</p>
            </div>
            
            <div className="card-festive overflow-hidden text-center p-6">
              <div className="inline-block bg-[#CD7F32] p-3 rounded-full mb-4">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">3rd Prize (2 Winners)</h3>
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
                <p className="text-gray-500">Winners to be announced</p>
              </div>
              <p className="text-sm text-gray-600">Mobile tripod & gift vouchers</p>
            </div>
          </div>
        </div>
        
        {/* Camera Captures Category */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-festival-maroon mb-6">Camera Captures Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-festive overflow-hidden text-center p-6">
              <div className="inline-block bg-festival-golden p-3 rounded-full mb-4">
                <Trophy size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">1st Prize</h3>
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
                <p className="text-gray-500">Winner to be announced</p>
              </div>
              <p className="text-sm text-gray-600">Professional camera accessories package</p>
            </div>
            
            <div className="card-festive overflow-hidden text-center p-6">
              <div className="inline-block bg-[#C0C0C0] p-3 rounded-full mb-4">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">2nd Prize (2 Winners)</h3>
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
                <p className="text-gray-500">Winners to be announced</p>
              </div>
              <p className="text-sm text-gray-600">Photography workshop voucher</p>
            </div>
            
            <div className="card-festive overflow-hidden text-center p-6">
              <div className="inline-block bg-[#CD7F32] p-3 rounded-full mb-4">
                <Medal size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-festival-maroon mb-2">3rd Prize (2 Winners)</h3>
              <div className="aspect-square bg-gray-100 flex items-center justify-center mb-4">
                <p className="text-gray-500">Winners to be announced</p>
              </div>
              <p className="text-sm text-gray-600">Photo printing voucher</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-festival-maroon mb-6">Honorable Mentions (5 Winners)</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5].map(num => (
              <div key={num} className="card-festive p-3">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Coming soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
