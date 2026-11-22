"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

const initial={name:"",email:"",organization:"",projectType:"Residential architecture",location:"",budget:"",language:"English",timeline:"",brief:"",website:""};
const messages={
 en:{name:"Full name",email:"Email address",org:"Company / organization",optional:"Optional",type:"Project type",location:"Project location",budget:"Estimated budget",language:"Preferred language",timeline:"Expected timeline",brief:"Project brief",file:"Supporting file",fileHelp:"Optional · PDF, JPG, PNG or WebP · Max 5 MB",city:"City, country",budgetHint:"Range and currency, if known",timelineHint:"e.g. Starting in spring 2027",briefHint:"Tell us about the project, its goals, scope, and the support you are looking for.",privacy:"Your details will only be used to respond to this enquiry. Do not include confidential or sensitive information.",send:"Send project enquiry",sending:"Sending…",success:"Thank you. Your enquiry has been received.",error:"The enquiry could not be sent. Please try again or email the studio directly.",direct:"Email the studio directly ↗",selected:"Selected file",types:["Residential architecture","Interior architecture","Commercial / hospitality","Spatial strategy","3D visualization","Other"]},
 fa:{name:"نام و نام خانوادگی",email:"نشانی ایمیل",org:"شرکت / سازمان",optional:"اختیاری",type:"نوع پروژه",location:"موقعیت پروژه",budget:"بودجه‌ی تقریبی",language:"زبان ترجیحی",timeline:"زمان‌بندی موردنظر",brief:"شرح پروژه",file:"فایل‌های تکمیلی",fileHelp:"اختیاری · PDF، JPG، PNG یا WebP · حداکثر ۵ مگابایت",city:"شهر، کشور",budgetHint:"در صورت امکان، بازه و واحد پول",timelineHint:"برای مثال: آغاز از بهار ۱۴۰۶",briefHint:"درباره‌ی پروژه، هدف‌ها، محدوده‌ی خدمات و انتظارات خود توضیح دهید.",privacy:"اطلاعات شما فقط برای پاسخ‌گویی به این درخواست استفاده می‌شود. لطفاً اطلاعات محرمانه یا حساس ارسال نکنید.",send:"ارسال درخواست پروژه",sending:"در حال ارسال…",success:"سپاسگزاریم. درخواست شما دریافت شد.",error:"ارسال درخواست انجام نشد. دوباره تلاش کنید یا مستقیماً به استودیو ایمیل بزنید.",direct:"ارسال ایمیل مستقیم ↗",selected:"فایل انتخاب‌شده",types:["معماری مسکونی","معماری داخلی","تجاری / مهمان‌نوازی","راهبرد فضایی","تصویرسازی سه‌بعدی","سایر"]}
};
const typeValues=["Residential architecture","Interior architecture","Commercial / hospitality","Spatial strategy","3D visualization","Other"];

export default function ProjectEnquiryForm(){
 const isFa=(usePathname()||"").startsWith("/fa"),t=messages[isFa?"fa":"en"];
 const [values,setValues]=useState({...initial,language:isFa?"فارسی":"English"});
 const [file,setFile]=useState(null),[status,setStatus]=useState("idle"),[message,setMessage]=useState("");
 function update(event){const {name,value}=event.target;setValues(current=>({...current,[name]:value}));}
 async function submit(event){
  event.preventDefault();const formElement=event.currentTarget;setStatus("sending");setMessage("");
  const data=new FormData();Object.entries(values).forEach(([key,value])=>data.append(key,value));if(file)data.append("attachment",file);
  try{const response=await fetch("/api/enquiry",{method:"POST",body:data});const result=await response.json();if(!response.ok)throw new Error(result.message||t.error);setStatus("success");setMessage(t.success);setValues({...initial,language:isFa?"فارسی":"English"});setFile(null);formElement.reset();}
  catch{setStatus("error");setMessage(t.error);}
 }
 return <form className="enquiry-form" onSubmit={submit} lang={isFa?"fa":"en"} dir={isFa?"rtl":"ltr"}>
  <div className="enquiry-form__grid">
   <label>{t.name} <span>*</span><input name="name" value={values.name} onChange={update} required maxLength={120} autoComplete="name"/></label>
   <label>{t.email} <span>*</span><input name="email" type="email" value={values.email} onChange={update} required maxLength={254} autoComplete="email"/></label>
   <label>{t.org} <small>{t.optional}</small><input name="organization" value={values.organization} onChange={update} maxLength={160} autoComplete="organization"/></label>
   <label>{t.type} <span>*</span><select name="projectType" value={values.projectType} onChange={update} required>{typeValues.map((value,index)=><option key={value} value={value}>{t.types[index]}</option>)}</select></label>
   <label>{t.location} <span>*</span><input name="location" value={values.location} onChange={update} required maxLength={160} placeholder={t.city}/></label>
   <label>{t.budget} <small>{t.optional}</small><input name="budget" value={values.budget} onChange={update} maxLength={100} placeholder={t.budgetHint}/></label>
   <label>{t.language}<select name="language" value={values.language} onChange={update}><option>English</option><option>فارسی</option></select></label>
   <label>{t.timeline} <small>{t.optional}</small><input name="timeline" value={values.timeline} onChange={update} maxLength={120} placeholder={t.timelineHint}/></label>
  </div>
  <label className="enquiry-form__brief">{t.brief} <span>*</span><textarea name="brief" value={values.brief} onChange={update} required minLength={20} maxLength={5000} rows={6} placeholder={t.briefHint}/></label>
  <label className="enquiry-form__file">{t.file} <small>{t.fileHelp}</small><input type="file" accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp" onChange={event=>setFile(event.target.files?.[0]||null)}/>{file?<small>{t.selected}: {file.name}</small>:null}</label>
  <div className="enquiry-form__trap" aria-hidden="true"><label>Website<input name="website" value={values.website} onChange={update} tabIndex={-1} autoComplete="off"/></label></div>
  <div className="enquiry-form__submit"><p>{t.privacy}</p><button type="submit" disabled={status==="sending"}>{status==="sending"?t.sending:t.send} <span>{isFa?"↖":"↗"}</span></button></div>
  {message?<p className={`enquiry-form__message enquiry-form__message--${status}`} role="status">{message} {status==="error"?<a href="mailto:Gp.rovor@gmail.com">{t.direct}</a>:null}</p>:null}
 </form>;
}