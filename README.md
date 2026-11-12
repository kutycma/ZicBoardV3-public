# ZicBoard Free Edition

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
dependencies, applies ZicBoard migrations, downloads the free core from official GitHub Releases when
available, and verifies the local health endpoint.

`update.sh` only runs database update/repair steps when tracked files under
`database/` changed between the installed commit and the target remote commit.
To force database update/repair anyway, run:

```bash
ZICBOARD_UPDATE_FORCE_DB=1 bash update.sh
```

## Free Edition

Panel 3.2.0 and core 0.3.0 enable all features without a license key or activation.
Run `bash install.sh` for a complete installation, including the core service.
The installer obtains the binary from official [GitHub Releases](https://github.com/kutycma/ZicBoardV3-public/releases) and verifies its checksum and signature.

Existing 3.1.x installations must back up the database and configuration, then run `bash update.sh` before the legacy license server shuts down. See the [transition announcement](docs/THONG-BAO-FREE-EDITION.md). Running only the Artisan update command does not replace the legacy core.

## Configuration

Start from `.env.example` for environment values such as the app URL, database,
Redis, mail, and object storage settings. Admin panel settings are saved under
the `zicboard` configuration namespace and written to `config/zicboard.php`.

## Credits

ZicBoard is developed from Xiao V2Board. Thanks to the upstream authors and
contributors whose work provides the base for this project.

## License

The panel (PHP, configurations, compiled UI, and scripts) is licensed under [GPL-3.0](LICENSE), with the upstream Xiao V2Board MIT notice preserved. The closed-source core binary is separately licensed as [freeware](LICENSE-CORE.md), including free commercial operation of your own panel. Obtain it only from official GitHub Releases; redistribution is restricted.