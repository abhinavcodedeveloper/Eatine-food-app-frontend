import landing from '../../public/images/landing.png'
import appDownloadImage from "../../public/images/appDownload.png";
import { Input } from '../components/ui/input';
const HomePage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-10'>
        <div className="py-5 flex flex-col gap-5 items-center justify-center">
            <h1 className='text-5xl text-orange-600 tracking-tight   font-bold'>Take away before anyone else does</h1>
            <p className='text-xl font-bold'>Food is just a Click Away</p>
            <Input
        
          placeholder="Search by City or Town"
          onSubmit={()=>{}}
        />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  )
}

export default HomePage