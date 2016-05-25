import objectAssign from 'object-assign';
import ValidatedUser from './validations/validated-user';
import stateful from './stateful';
import StatefulKey from './stateful-key';

/**
 * User.
 * Represents the user who belongs to specific platform (Telegram, Cli, etc.)
 *
 * @author Roman Pushkin (roman.pushkin@gmail.com)
 * @extends {ValidatedUser}
 * @date 2016-04-25
 * @version 1.1
 * @since 0.1.0
 */
export default class User extends stateful(ValidatedUser) {
  /**
   * Constructor.
   *
   * @type {Object}
   * @param {string} options.platformType - Platform type identifier,
   * for example: "telegram", or "cli". See {@link SupportedPlatforms}
   * @param {string} options.platformId - User unique id for specified platform.
   */
  constructor(options) {
    super(options);
    objectAssign(this, options);

    const statefulKey = new StatefulKey({
      platformType: this.platformType,
      platformId: this.platformId }).toString();

    this.stateful = {
      key: statefulKey,
      table: 'users',
    };
  }
}
