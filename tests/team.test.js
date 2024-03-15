import { Team } from '../src/classes/Team';

describe('Team class functionality', () => {
    let team;
    const character = { name: 'Archer', level: 1 };

    beforeEach(() => {
        team = new Team();
    });

    test('should add a character to the team', () => {
        team.add(character);
        expect(team.members.has(character)).toBe(true);
    });

    test('should throw error when adding a duplicate character', () => {
        team.add(character);
        expect(() => team.add(character)).toThrow('Character already in team');
    });

    test('should add multiple characters with addAll method', () => {
        const character2 = { name: 'Mage', level: 2 };
        team.addAll(character, character2);
        expect(team.members.size).toBe(2);
    });

    test('toArray method should convert Set to Array', () => {
        team.add(character);
        const array = team.toArray();
        expect(Array.isArray(array)).toBe(true);
        expect(array).toContain(character);
    });
});
