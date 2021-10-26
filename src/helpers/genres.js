// export const idGenre = new Map();
// idGenre.set(28, 'Action');
// idGenre.set(12, 'Adventure');
// idGenre.set(16, 'Animation');
// idGenre.set(35, 'Comedy');
// idGenre.set(80, 'Crime');
// idGenre.set(99, 'Documentary');
// idGenre.set(18, 'Drama');
// idGenre.set(10751, 'Family');
// idGenre.set(14, 'Fantasy');
// idGenre.set(36, 'History');
// idGenre.set(27, 'Horror');
// idGenre.set(10402, 'Music');
// idGenre.set(9648, 'Mystery');
// idGenre.set(10749, 'Romance');
// idGenre.set(878, 'Science Fiction');
// idGenre.set(10770, 'TV Movie');
// idGenre.set(53, 'Thriller');
// idGenre.set(10752, 'War');
// idGenre.set(37, 'Western');

export const idGenre = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

export const genreId = Object.fromEntries(Object.entries(idGenre).map((a) => a.reverse()));

export const idToGenre = (id) => {
  return id in idGenre ? idGenre[id] : 'no genre';
};

export const genreToId = (genre) => {
  return genre in genreId ? genreId[genre] : null;
};
