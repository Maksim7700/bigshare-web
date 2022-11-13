import '../../css/main.css';
import '../../css/anketa.css';
import '../../css/hover.css';

import React from 'react';
import Container from '../../UI/Container'
import BoxAnketa from './BoxAnketa';
import { useDispatch, useSelector } from 'react-redux';
import { isBudget, isFormDetails, isService, isSize, isTime, finishForm } from '../reducers/anketaReducer';
import { budgetF, formDetailsF, serviceF, sizeF, timeF } from '../reducers/formReducer';
import { useForm } from 'react-hook-form';


const Anketa = () => {
  const dispatch = useDispatch();
  const service = useSelector((state) => state.anketa.isService)
  const size = useSelector((state) => state.anketa.isSize)
  const time = useSelector((state) => state.anketa.isTime)
  const budget = useSelector((state) => state.anketa.isBudget)
  const formDetails = useSelector((state) => state.anketa.isFormDetails)
  const finishFormValue = useSelector((state) => state.anketa.isFinishForm)
  //const form = useSelector((state) => state.formDetails)



  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    dispatch(formDetailsF(data));
    dispatch(finishForm());
  }

  const getNextPage = () => {
    if (service) {
      dispatch(isSize());
    } else if (size) {
      dispatch(isTime());
    } else if (time) {
      dispatch(isBudget());
    } else if (budget) {
      dispatch(isFormDetails());
    }
  }

  const getPreviousPage = () => {
    if (size) {
      dispatch(isService());
    } else if (time) {
      dispatch(isSize());
    } else if (budget) {
      dispatch(isTime());
    } else if (formDetails) {
      dispatch(isBudget())
    }
  }

  const getNamePage = (value) => {
    if (service) {
      dispatch(serviceF(value));
    } else if (size) {
      dispatch(sizeF(value));
    } else if (time) {
      dispatch(timeF(value));
    } else if (budget) {
      dispatch(budgetF(value));
    } else {
      dispatch(formDetailsF(value));
    }
  }

  const boxClick = (value) => {
    getNamePage(value);
    getNextPage();
  }

  const backClick = () => {
    getPreviousPage();
  }

  return (
    <Container>
      <div className='paddint-top-200 padding-bottom-24 f-w-700 gilroy l-h-72 f-s-56 center Gilroy-700'><span className='text-color-black'>Let's </span><span className='big-share-color'>get started</span><span className='text-color-black'>. Tell us how we can help</span></div>
      <div className='text-anketa l-h-24 em-05 montserrat f-w-400 fs-16 center Montserrat-400 text-color-silver-s'>Let’s turn your idea into digital reality! Just answer our interactive questions and we will draft the best product offer for you. We provide free estimation and IT consulting for our clients. So don’t hesitate to contact us.</div>
      <div className='view l-h-24 f-w-500 color-service Gilroy-500 text-color-black'>
        {service && <p>What service are you interested in?</p>}
        {size && <p>How big is your project?</p>}
        {time && <p>How much time do you have for a development?</p>}
        {budget && <p>What is your project budget?</p>}
        {formDetails && <p>Thanks. We just need a few details about you.</p>}
        {!service && !size && !time && !budget && !formDetails && <p>Thanks. We will contact you soon.</p>}
      </div>
      <div className='d-flex'>
        {service && <><BoxAnketa className='complex_service_anketa' getBoxClick={boxClick} title='Complex of services'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='design_anketa' title='Design'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='web_development_anketa' title='Web development'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='mobile_development_anketa' title='Mobile development'></BoxAnketa>
          <BoxAnketa className='n-r other_anketa' getBoxClick={boxClick} title='Other'></BoxAnketa></>}
        {size && <><BoxAnketa getBoxClick={boxClick} className='xs' title='XS'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='s' title='S'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='m' title='M'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='l' title='L'></BoxAnketa>
          <BoxAnketa className='n-r xl' getBoxClick={boxClick} title='XL'></BoxAnketa></>}
        {time && <><BoxAnketa getBoxClick={boxClick} className='less_mon' title='Less than 1 month'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='m_1_2_mon' title='1-2 months'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='m_2_4_mon' title='2-4 months'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='m_4_6_mon' title='4-6 months'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='n-r more_6_mon' title='More than 6 months'></BoxAnketa></>}
        {budget && <><BoxAnketa getBoxClick={boxClick} className='less_1k' title='Less than $1k'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='d_1_3k' title='$1k-3k'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='d_3_6k' title='$3k-6k'></BoxAnketa>
          <BoxAnketa getBoxClick={boxClick} className='d_6_10k' title='$6k-10k'></BoxAnketa>
          <BoxAnketa className='n-r more_10k' getBoxClick={boxClick} title='More than $10k'></BoxAnketa></>}
        {formDetails &&
          <div className='d-flex n-p'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='d-flex w-1340'>
                <input className={`wdd Montserrat-400 ${errors.email ? 'error' : 'input-big-share'}`} type="text" placeholder="Your email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input className='wdd Montserrat-400 input-big-share' type="text" placeholder="Your name (Oprional)" {...register("name", { required: false, maxLength: 100 })} />
                <input className='wdd Montserrat-400 input-big-share' type="tel" placeholder="Your phone (Optional)" {...register("phone", { required: false, minLength: 6, maxLength: 12 })} />
                <input className='wdd Montserrat-400 input-big-share' type="text" placeholder="Your company (Optional)" {...register("company", { required: false, maxLength: 100 })} />
                <input className='wdd Montserrat-400 input-big-share n-r' type="text" placeholder="Your comment (Optional)" {...register("comment", {})} />
              </div>
              <input className='float-right submit Montserrat-500' type="submit" value='Create with BigShare' />
              <div className='back-button-form' onClick={getPreviousPage}><div className='back-button-button float-right Montserrat-400'>Back</div><div className='ar-left arrow left float-right'></div></div>
            </form>
          </div>}
      </div>
      {!formDetails && <div className='center n-p'>
        <div className={`${service ? 'm-39' : ''}  d-flex for-center`}>
          {(!service && !finishFormValue) && <><div onClick={backClick} className='back-button-click'><div className='back-button-button float-right Montserrat-400'>Back</div><div className='ar-left arrow left float-right'></div></div></>}

          {!finishFormValue && <div className={`bar d-flex`}>
            {/* color w-55 */}
            {service && <><div className='color w-55'></div><div className=''></div><div className=''></div><div className=''></div><div className=''></div></>}
            {size && <><div className='color w-55'></div><div className='color w-55'></div><div className=''></div><div className=''></div><div className=''></div></>}
            {time && <><div className='color w-55'></div><div className='color w-55'></div><div className='color w-55'></div><div className=''></div><div className=''></div></>}
            {budget && <><div className='color w-55'></div><div className='color w-55'></div><div className='color w-55'></div><div className='color w-55'></div><div className=''></div></>}

          </div>}
        </div>
        {service && <div className='color-step Montserrat-400'>Step 1 of 5</div>}
        {size && <div className='color-step Montserrat-400'>Step 2 of 5</div>}
        {time && <div className='color-step Montserrat-400'>Step 3 of 5</div>}
        {budget && <div className='color-step Montserrat-400'>Step 4 of 5</div>}
      </div>
      }
    </Container>
  )
}
export default Anketa;
