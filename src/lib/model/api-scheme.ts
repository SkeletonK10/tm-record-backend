/**
 * A Corporation of game
 * @typedef {object} Corporation
 * @property {number} id.required - Corporation Identifier
 * @property {string} name.required - Corporation name
 * @property {string} desc - A Description of the corporation
 */

/**
 * A Extension of game
 * @typedef {object} Extension
 * @property {number} id.required - Extension Identifier
 * @property {string} name.required - Extension name
 */

/**
 * A Game
 * @typedef {object} Game
 * @property {number} id.required - Game Identifier
 * @property {boolean} valid.required - true if the game is successfully over
 * @property {number} season.required - Season participated (Pre-season: 0)
 * @property {number} round.required - Round of the season (Pre-season: 0)
 * @property {Map} map.required - Map played
 * @property {array<Extension>} extensions - Extensions played
 * @property {array<Result>} results.required - Results engaged
 */

/**
 * A Map
 * @typedef {object} Map
 * @property {number} id.required - Map Identifier
 * @property {string} name.required - Map name
 */

/**
 * A Result of user in the game
 * @typedef {object} Result
 * @property {User} user.required - User participated
 * @property {Game} game.required - Game participated
 * @property {string} color.required - Color played (Default: Unknown) - enum: Black, Blue, Green, Red, Unknown, Yellow
 * @property {Corporation} corporation.required - Corporation played
 * @property {number} rank.required - Rank recorded (1 ~ 5)
 * @property {number} score.required - Score recorded
 */

/**
 * A User
 * @typedef {object} User
 * @property {number} id.required - User Identifier
 * @property {string} nickName - User nickname
 * @property {string} realName.required - User's real name
 * @property {number} rating.required - User Rating
 */
