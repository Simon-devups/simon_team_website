const MockData = [
    { name: 'رادمهر تبریزی', phone: '09123138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
    { name: 'هانیه امیری', phone: '09143138756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
    { name: 'فرهاد اکبری', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },
    { name: 'فرهاد اکبری', phone: '09142738756', text: 'برای درخواست مشاوره رایگان مزاحم شدم چطور میتونم برای شما عکس محصولات کارگاه را بفرستم' },

]
const page = () => {
    return (
        <div style={{ display: 'flex', padding: '24px', flexDirection: 'column' }}>
            <h1 style={{ margin: '0 auto', color: '#175DE3' }}>لیست درخواست مشاوره</h1>

            <div style={{ margin: '20px auto', width: '100%', maxWidth: '1336px' }}>
                {MockData.map((data , key) => {
                    return (
                        <div key={key} style={{ marginTop: '10px' , padding: '48px',borderRadius: '20px' ,border: '1px solid #e5e7eb' , position: 'relative'}}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={{ display: 'flex', gap: '20px' , alignItems: 'center'}}>
                                    <span style={{color: '#737373'}}>نام کاربر:</span>
                                    <h4 style={{color: '#3b82f6'}}>{data.name}</h4>
                                </div>
                                <div style={{ display: 'flex', gap: '20px' , alignItems: 'center'}}>
                                    <span style={{color: '#737373'}}>شماره تماس:</span>
                                    <h4 style={{color: '#3b82f6'}}>{data.phone}</h4>
                                </div>
                            </div>

                            <div style={{marginTop: '20px' , borderTop: '1px solid #e5e7eb', paddingTop: '8px'}}>
                                <div style={{ display: 'flex', flexDirection: 'column' , alignSelf: 'center' , gap: '10px' , justifyContent: 'space-between' , alignContent: 'center'}}>
                                    <span style={{color: '#737373'}}>متن درخواست:</span>
                                    <span>{data.text}</span>
                                </div>
                            </div>

                            <button style={{position: 'absolute' , bottom: '0' , left: '0'}}></button>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
export default page