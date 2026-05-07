export class Subject {
  constructor({ id, name, emoji, order }) {
    this.id = id;
    this.name = name;
    this.emoji = emoji;
    this.order = order;
  }

  static allSubjects = [
    new Subject({ id: 'history', name: 'History', emoji: '📜', order: 0 }),
    new Subject({ id: 'technology', name: 'Technology', emoji: '💻', order: 1 }),
    new Subject({ id: 'english', name: 'English', emoji: '📖', order: 2 }),
    new Subject({ id: 'maths', name: 'Maths', emoji: '🔢', order: 3 }),
  ];

  static getById(id) {
    return Subject.allSubjects.find(s => s.id === id) || null;
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      emoji: this.emoji,
      order: this.order,
    };
  }

  static fromJSON(json) {
    return new Subject({
      id: json.id,
      name: json.name,
      emoji: json.emoji,
      order: json.order,
    });
  }
}



