export default function maskPhone(value){
  if (!value) {
    return value
  }

  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 2){
    return phoneNumber;
  }

  if (phoneNumberLength < 6){
    return `${phoneNumber.slice(0,1)}-${phoneNumber.slice(1,5)}`;
  }

  if (phoneNumberLength < 8){
    return `${phoneNumber.slice(0,1)}-${phoneNumber.slice(1,5)}-${phoneNumber.slice(5,7)}`;
  }

  if (phoneNumberLength < 10){
    return `${phoneNumber.slice(0,1)}-${phoneNumber.slice(1,5)}-${phoneNumber.slice(5,7)}-${phoneNumber.slice(7,9)}`;
  }
  
  return `${phoneNumber.slice(0,1)}-${phoneNumber.slice(1,5)}-${phoneNumber.slice(5,7)}-${phoneNumber.slice(7,9)}`;
}
