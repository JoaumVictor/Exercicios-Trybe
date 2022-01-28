  const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  const battleMembers = { mage, warrior, dragon };



  const danoMinimoDrag = 15;
  const danoBaseDrag = dragon.strength;
  function dragonAttack(min, max) {
    return Math.ceil(Math.random()*(max, min)) + min;
  };
//console.log(dragonAttack(danoMinimoDrag, danoBaseDrag));

  const danoBaseWarrior = warrior.strength;
  const danoMaximoWarrior = warrior.strength * warrior.weaponDmg;
  function warriorAttack (min, max) {
    return Math.ceil(Math.random()*(max, min)) + min;
  };
  //console.log(warriorAttack(danoBaseWarrior, danoMaximoWarrior));




  const danoBaseMage = mage.intelligence;
  const danoMaximoMage = mage.intelligence * 2;
  
  function mageAttack(min, max) {
      if ( mage.mana < 15 ) {
          return 'Você não tem mana pra usar esse ataque'
      };
    mage.mana += -15;
    const danoCausado = Math.ceil(Math.random()*(max, min)) + min;
    return danoCausado;
  }
  console.log(mageAttack(danoBaseMage, danoMaximoMage));
  