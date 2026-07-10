//(Login) / login / page.jsx
'use client'
import { useRouter } from "next/navigation";
import { useReducer } from "react";
import { useForm } from "react-hook-form";

import styles from './styles/login.module.css'
import Link from "next/link";

//در این کد آیدنتیفایر شماره تلفن یا ایمیل است
const initialState = {
    status: 'enterIdentifier',
    identifierValue: ''
}

const page = () => {
    //روتر نکست
    const router = useRouter();
    //سابمیت آیدنتیفایر
    function onSubimtIdentifier(data) {
        console.log('dataIDNTEFIER', data);
        dispatch({
            type: 'Identifier_Submitted',
            payload: data.identifier
        })
    }
    //سابمیت پسور
    async function onSubimtPassword(data) {
        console.log('dataPASS', data);
        try {
            const res = await fetch('/api/auth/login' , {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                credentials: 'include', // برای cookie/token
                body: JSON.stringify({
                    email: identifierValue,
                    password: data.password
                })
            });

            const result = await res.json();
            if (res.ok){
                // ذخیره token اگر بک‌اند بفرستد
                if (result.token) {
                    localStorage.setItem('token', result.token);
                }
                dispatch({
                    type: 'done'
                });
                router.replace('/admin');               
            } else {
                console.log(result.message || result.error || 'خطای ورود');
                // نمایش پیام خطا به کاربر
            }
            
        }
        catch(err) {
            console.log('Login error:', err);
            // نمایش پیام خطای اتصال
        }
    }


    // ارور ها:
    function onErrorIderntifier(err) {
        console.log('identifier error', err);
    }
    function onErrorPassword(err) {
        console.log('pass error', err);
        // dispatch({
        //     type:
        // })
    }
    const { register: registerIdentifier, handleSubmit: handleIdentifierSubmit, formState: { errors: identifierErrors }, setFocus: setIdentifierFocus } = useForm()
    const { register: registerPass, handleSubmit: handlePasswordSubmit, formState: { errors: passwordErrors } } = useForm()
    const [{ status, identifierValue, error }, dispatch] = useReducer(reducer, initialState);
    function reducer(state, action) {
        switch (action.type) {
            case "done":
                return {
                    ...state,
                    status: 'done'
                }

            case "startOver":
                return {
                    ...initialState
                }

            case "Identifier_Submitted":
                return {
                    ...state,
                    status: 'password',
                    identifierValue: action.payload, // شماره/ایمیل وارد شده
                    secondsLeft: 3,
                }

            default: return state;
        }





    }
    return (
        <main className={styles.main}>
            {status == 'enterIdentifier' && <form
                autoComplete='off'
                onSubmit={handleIdentifierSubmit(onSubimtIdentifier, onErrorIderntifier)}
                className={styles.Cont}
                noValidate
            >
                <div className={styles.row1}>
                    <div className={styles.ComeBack} onClick={() => router.back()} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#636363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <Link href={'/'}>
                        <div className={styles.logoCont}><img src="/simon.svg" alt="Brand Logo" /></div>
                    </Link>
                </div>
                <div className={styles.row2}>
                    <h1 className={styles.textH1}>
                        ورود به پنل ادمین
                    </h1>

                    {status === "enterIdentifier" && <p style={{ fontSize: '12px', color: '#3f4064', marginTop: '16px', lineHeight: '2.17', fontWeight: '500' }}>
                        سلام!
                    </p>}

                    <p style={{ fontSize: '12px', color: '#3f4064', marginBottom: '16px', lineHeight: '2.17', fontWeight: '500' }}>
                        {status === "enterIdentifier" && "لطفا شماره موبایل یا ایمیل خود را وارد کنید"}
                    </p>

                    <div>
                        <label className={styles.labelInput}>
                            <div className={styles.divInput}>
                                <div className={styles.grow}>
                                    <input
                                        type="text"
                                        {...registerIdentifier("identifier", {
                                            required: 'شماره یا ایمیل خود را وارد کنید.',
                                            validate: (value) => {
                                                const phoneRegex = /^09\d{9}$/;
                                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                                return (phoneRegex.test(String(value)) ||
                                                    emailRegex.test(String(value)) ||
                                                    "شماره موبایل یا ایمیل را به درستی انتخاب بکنید."
                                                )
                                            }
                                        })}
                                    />
                                </div>
                            </div>
                            {(identifierErrors.identifier?.message) && <p className={styles.alert}>{identifierErrors.identifier?.message}</p>}
                        </label>
                    </div>
                </div>
                <input type='submit'
                    value='ورود'
                    className={styles.login_btn}
                />
            </form>}




            {status == "password" && <form
                autoComplete='off'
                onSubmit={handlePasswordSubmit(onSubimtPassword, onErrorPassword)}
                className={styles.Cont}
                noValidate
            >
                <div className={styles.row1}>
                    <div className={styles.ComeBack} onClick={() => router.back()} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http:www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#636363" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <Link href={'/'}>
                        <div className={styles.logoCont}><img src="/simon.svg" alt="Brand Logo" /></div>
                    </Link>
                </div>

                <div className={styles.row2}>

                    <h1 className={styles.textH1}>
                        {passwordErrors.password?.message ? "خطا در ورود" : "رمز عبور را خود را وارد کنید."}
                    </h1>
                    <p style={{ fontSize: '12px', color: '#3f4064', marginBottom: '16px', lineHeight: '2.17', fontWeight: '500' }}>
                        {passwordErrors.password?.message ?  passwordErrors.password?.message : "رمز عبور خود را وارد کنید"}
                    </p>

                    <div>
                        <label className={styles.labelInput}>
                            <div className={styles.divInput}>
                                <div className={styles.grow}>
                                    <input
                                        type="password"
                                        {...registerPass("password", {
                                            required: 'رمز عبور را وارد کنید.',
                                            minLength: {
                                                value: 6,
                                                message: 'رمز عبور باید حداقل 6 کاراکتر باشد'
                                            }
                                        })}
                                    />
                                </div>
                            </div>
                            {(passwordErrors.password?.message) && <p className={styles.alert}>{passwordErrors.password?.message}</p>}
                        </label>
                    </div>
                </div>
                <input type='submit'
                    value='ورود'
                    className={styles.login_btn}
                />

                {/* مدت زمان باقی مانده */}
                {/* {(status === "code" && secondsLeft > 0) && <div dir='ltr' className={styles.remaining}> {minutes_And_seconds(secondsLeft)}<div>مانده تا دریافت مجدد کد</div></div>} */}

                {/* ارسال از طرق پیامک */}
                {/* {(status === "code" && secondsLeft === 0) && <p onClick={() => dispatch({ type: 'ResendCode' })} className={styles.accept} style={{ color: 'black', cursor: 'pointer' }}>دریافت مجدد کد از طریق <span style={{ fontWeight: 600 }}>پیامک</span></p>} */}

            </form>}
        </main >
    )
}
export default page