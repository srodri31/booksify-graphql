const { db } = require('../config/db')

class LibraryDAO {
  async getAllLibraries() {
    const result = await db.select().from('library');
    // Make any needed maps like snake_case to camelCase
    return result
  }
}

module.exports = new LibraryDAO()