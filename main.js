const bobsFollowers = ['dave', 'susie', 'castro', 'alexia'];
const tinasFollowers = ['dave', 'susie', 'cheeseman'];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
  if (bobsFollowers[i] === tinasFollowers[j]){
    (mutualFollowers.push(tinasFollowers[j]))
    }
  }
};

console.log(mutualFollowers);
