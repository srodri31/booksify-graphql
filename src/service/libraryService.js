const libraryDAO = require('../dao/libraryDAO')

class LibraryService {
  getAllLibraries() {
    return libraryDAO.getAllLibraries()
  }
}

module.exports = new LibraryService()