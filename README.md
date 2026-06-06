# ZicBoard

ZicBoard is a proxy subscription and management panel developed from Xiao V2Board.
This project keeps that foundation while moving the product name, commands, and
configuration namespace to ZicBoard.

## Requirements

- PHP 7.3 or later
- Composer
- MySQL 5.5 or later
- Redis
- Laravel-compatible PHP extensions required by the dependencies

## Installation

1. Install the PHP dependencies with Composer.
2. Copy or create the environment file from `.env.example` when needed.
3. Run the installer:

```bash
php artisan zicboard:install
```

The installer prepares the environment, imports the database schema, and creates
the first administrator account.

For customer installations on aaPanel, follow:

```text
docs/HUONG-DAN-NGUOI-MUA-SETUP-AAPANEL.md
```

## Update

Run the update command after deploying updated project files:

```bash
php artisan zicboard:update
```

The update command refreshes the cached configuration, applies database updates,
and restarts the Horizon queue workers.

For public release installations, use:

```bash
bash update.sh
```

The script updates the PHP panel with `git pull --ff-only`, installs PHP
dependencies, applies ZicBoard migrations, prepares the licensed runtime when
available, and verifies the local health endpoint.

`update.sh` only runs database update/repair steps when tracked files under
`database/` changed between the installed commit and the target remote commit.
To force database update/repair anyway, run:

```bash
ZICBOARD_UPDATE_FORCE_DB=1 bash update.sh
```

## Commercial License

Some commercial features require a valid ZicBoard license. The installer and
update script will prepare the licensed runtime automatically when the server is
configured with a valid license key.

## Configuration

Start from `.env.example` for environment values such as the app URL, database,
Redis, mail, and object storage settings. Admin panel settings are saved under
the `zicboard` configuration namespace and written to `config/zicboard.php`.

## Credits

ZicBoard is developed from Xiao V2Board. Thanks to the upstream authors and
contributors whose work provides the base for this project.

## License

ZicBoard commercial additions are distributed only under the commercial
license in `LICENSE`. Portions originating from Xiao V2Board retain their
upstream MIT notice as stated in that file.
