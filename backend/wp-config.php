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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp-react');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'U~2[hqdx<ig05wntOyv b7IbG?aB981{}i?7U[i}V^i6)!VnQhdW3A$S~2=Ca3f1');
define('SECURE_AUTH_KEY',  '92T {XQrGGJa%qJXcDi;TFb$@T{Hls2p<_#(}E8aPDRy{?xii*11$=?}ogMvcTX3');
define('LOGGED_IN_KEY',    '(99wU}gHJpVo*M-+J.NR>qT(.9r>>Gq2T(zvS>Bc rn_T0S<~Z 8&.+gH8ML}y.z');
define('NONCE_KEY',        '!BCRjSN,%v:/,(n_%7;kQVC*$[1koukY6=J1ox}xgP({9T(c+=ME3uCh:EYT5%Qw');
define('AUTH_SALT',        '+2LuQS1qM0(s4./X=&y!;4p.$|)o1?$L/rsT#@;=!!*MzXAcjcp4FyxuF6#H2F{9');
define('SECURE_AUTH_SALT', 'pJUV:`ba_e_>7V~w0&xsUh~QK}(g(6{9yM2#%.<]$.}&PfLMEk/9mg1R&%VCn!+>');
define('LOGGED_IN_SALT',   '>0=34UAMH*)2zgWeuH~2]z/u7:)q7.|Vdhy-RC?bxyeg`B3ar!Mv;)}[:{WB8Y{/');
define('NONCE_SALT',       '89J*J+0ls1`RF|q<g&3/69lX7Jl,cPr2e-@e+l<BG=fseO@^#:nW~w_x9hpBWSPR');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
