function basicTeenager(age) {
  if (13<=age || age<=19){
    return "You are a teenager!"  }

}

function teenager(age) {
  if (13<=age || age<=19){
      "You are a teenager!"  }
  else {
    return "You are not a teenager"}
}

function ageChecker(age) {
if (13<=age && age<=19) {
  return "You are a teenager!"}
else if (age<=12) {
  return "You are a kid"}
else if (20<=age) {
  return "You are a grownup"}
}

function ternaryTeenager(age) {
(13<=age && age<=19) ? return "You are a teenager" : return "You are not a teenager"
}

function switchAge(age) {
switch(age)
{case 13<=age && age<=19 : return "You are a teenager"
                             break
default : return "You have an age"
                break }
}
basicTeenager(12);
teenager(19);
ageChecker(22);
ternaryTeenager(65);
switchage(7);
