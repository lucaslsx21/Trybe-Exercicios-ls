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

// Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15(dano mínimo) e o valor do atributo strength(dano máximo).
// Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength(dano mínimo) e o valor de strength * weaponDmg(dano máximo).
// Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence(dano mínimo) e o valor de intelligence * 2(dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem(Ex: “Não possui mana suficiente”) e a mana gasta é 0.

const dragonAttack = (dragon) => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random() * dragon.strength);

    const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;

    return dragonDmg;
};

const warriorAttack = (warrior) => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() * (minDmg * warrior.weaponDmg));
    const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
    return warriorDmg;
};

const mageAttack = (mage) => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana...',
    };

    if (mageMana > 15) {
        const mageDmg = minDmg < maxDmg ? maxDmg : minDmg;
        turnStats.manaSpent = 15;
        turnStats.damageDealt = mageDamage;
        return turnStats;
    }
    return turnStats;
};

const gameActions = {
    warriorTurn: (warriorAttack) => {
        const warriorDamage = warriorAttack(warrior);
        warrior.damage = warriorDamage;
        dragon.healthPoints -= warriorDamage;
    },
    mageTurn: (mageAttack) => {
        const mageTurnStats = mageAttack(mage);
        const mageDamage = mageTurnStats.damageDealt;
        mage.damage = mageDamage;
        mage.mana -= mageTurnStats.manaSpent;
        dragon.healthPoints -= mageDamage;
    },
    dragonTurn: (dragonAttack) => {
        const dragonDamage = dragonAttack(dragon);
        mage.healthPoints -= dragonDamage;
        warrior.healthPoints -= dragonDamage;
        dragon.damage = dragonDamage;
    },
    turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());