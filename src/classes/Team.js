export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Character already in team');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            this.members.add(character);
        });
    }

    toArray() {
        return [...this.members];
    }
}