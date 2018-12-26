export default function getFullName(object = {}, concatMiddleName) {
  if(!object || !object.first_name)return null;

  return `${object.first_name}${concatMiddleName &&
  object.middle_name ? ' ' + object.middle_name : ''} ${object.last_name || ''}`.trim();
}
