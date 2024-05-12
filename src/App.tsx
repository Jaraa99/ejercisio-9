import React from 'react';

function DnDCharacter() {
  const strength = generateAbilityScore();
  const dexterity = generateAbilityScore();
  const constitution = generateAbilityScore();
  const intelligence = generateAbilityScore();
  const wisdom = generateAbilityScore();
  const charisma = generateAbilityScore();
  const hitpoints = 10 + getModifierFor(constitution);

  function rollDice(): number {
    return Math.floor(Math.random() * (6 - 1) + 1);
  }

  function findLowest(numbers: number[]): number {
    return numbers.reduce((final, current) =>
      final >= current ? current : final
    );
  }

  function generateAbilityScore(): number {
    let dicesRolls: number[] = [];
    for (let i = 0; i < 4; i++) {
      dicesRolls.push(rollDice());
    }
    let lowest = findLowest(dicesRolls);
    dicesRolls.splice(dicesRolls.indexOf(lowest), 1);
    return dicesRolls.reduce((final, current) => final + current);
  }

  function getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }

  return (
    <div>
      <h2>DnD Character</h2>
      <p>Strength: {strength}</p>
      <p>Dexterity: {dexterity}</p>
      <p>Constitution: {constitution}</p>
      <p>Intelligence: {intelligence}</p>
      <p>Wisdom: {wisdom}</p>
      <p>Charisma: {charisma}</p>
      <p>Hitpoints: {hitpoints}</p>
    </div>
  );
}

export default DnDCharacter;
