import React from 'react'
import './info.css'
import userPhoto from '../../../../assets/images/Ellipse4.svg'
const InfoBox = (props) => {
    return (
        <div>
            {props.showBox ?
                <div className="info-box-container">
                    <div className='info-box-image-container d-lg-flex justify-content-end'>
                        <img src={userPhoto}></img>
                    </div>
                    <br />
                    <div className='info-box-text-container d-lg-flex flex-column align-items-end'>
                        <span>
                            فاطمه غفوری
                        </span>
                        <span>
                            ghafourifatemeh80@gmail.com
                        </span>
                    </div>
                    <br />
                    <br />
                    <div className='info-box-submit-and-history-container d-lg-flex  align-items-center'>
                        <button className='info-box-submit-btn'>
                            ثبت
                        </button>
                        <div>
                        
                            <span>
                                سوابق همکاری
                            </span>
                            <span>
                                :
                            </span>
                            <span>
                                نام پروژه
                            </span>
                            <span>
                                ,
                            </span>
                            <span>
                                نام پروژه
                            </span>
                            <span>
                                ,
                            </span>
                            <span>
                                نام پروژه
                            </span>
                            
                        </div>

                    </div>

                </div> :
                null
            }

        </div>
    )
}

export default InfoBox
