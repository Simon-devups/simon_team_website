import Image from "next/image"
import Logo from "../../../public/simon.svg"
const page = () => {
  return (
    <div style={{ height: '100%', textAlign: 'center', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '40px', border: '1px solid #e5e7eb', borderRadius: '32px' }}>

        <div style={{ borderStyle: 'dashed', borderWidth: '8px', borderRadius: '1000px', borderColor: '#3b82f6', padding: '10px' }}>
          <div style={{ width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '250px', backgroundColor: '#175DE3', padding: '16px', borderRadius: '1000px' }}>
            <Image width={200} height={200} src={Logo} alt="logo"/>
          </div>
        </div>


        <p style={{ color: '#3b82f6' , fontWeight: '900'}}> به پنل مدیریت خوش آمدید!</p>
      </div>
    </div>
  )
}
export default page