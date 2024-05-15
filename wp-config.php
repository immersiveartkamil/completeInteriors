<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', '38452464_b0974f6e' );

/** MySQL database username */
define( 'DB_USER', '38452464_b0974f6e' );

/** MySQL database password */
define( 'DB_PASSWORD', '0T!Mmzzs' );

/** MySQL hostname */
define( 'DB_HOST', 'mysql8' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '>2d)h:88xi:%ZC]h}`lJO:cUH{I0m1,_`3F#RZ|6T9Z4kSSnhN$1yV9mfx-R|0}O' );
define( 'SECURE_AUTH_KEY',   'T/cJB(+C;P?uA1s~3|V,Q(T#wNH!l<Lxqm:NSTL+D*nmpGhAq7<;`.EOg2wC=Xj*' );
define( 'LOGGED_IN_KEY',     '0{fu}tPGiBv$*ew{ix|s56i|4j76Y}SbwE9*O]Rhp#{EKRT3%Q 6nYJo7il_h@sj' );
define( 'NONCE_KEY',         '9Y%AbEvaU>,L~>p^0A}-H67,/6HLpedk6?syx2B?7w)flPU<FVtA?35x.80%bq}`' );
define( 'AUTH_SALT',         'kvu&]Idu+VY!@}}kgIh$[ce{:w0UQ-9L(pKk5;[Qv?Rw9,RI^xn}r.-6 Xg3)w{v' );
define( 'SECURE_AUTH_SALT',  'oj{.%PKkhqw8}KawOvx}%3)}cf-GXk$~NK6O,031IK-]`54w<w]gQ:;>0K*U87a]' );
define( 'LOGGED_IN_SALT',    'tMmvJdDPQJI/{Vs@c6$C9&;Xdne3~f {5mbmFJdX]_4ZmgD-cI332<]n70E^+#Nl' );
define( 'NONCE_SALT',        '%^GZ?]CHn?{sQYDc<G=NuyXl&Q`A7ybw#)$gQ(<^0g)mH+J>s +X_C])g+&7}`K?' );
define( 'WP_CACHE_KEY_SALT', 'CXP%Ca}c9_^-u,zU9T`?w/([Jm*+y}$Gwng2:W%*0bmNclv6B.%H,gr &nF]nb:#' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
