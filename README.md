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
dependencies, applies ZicBoard migrations, downloads a signed `zicboard-core`
binary through the configured license endpoint, restarts the core service when
available, and verifies the local health endpoint.

## Public Release Repository

The customer-facing repository is generated from this private repository with:

```powershell
.\packaging\publish-public.ps1
```

The generated repository is expected at the sibling path
`D:\code\ZicBoard\ZicBoardV3-public`. Do not use this project's `public/`
directory as the public Git repository; `public/` is the web document root.

The publish script uses an allowlist and forbidden-content scanner. It refuses
to publish if private Go source, license-server source, runtime secrets, or
protected PHP logic markers are present. Protected commercial operations are
served by the licensed `zicboard-core` process through authenticated local RPC.

## ZicBoard Core

`zicboard-core` is built from the private `core/` directory and distributed as a
signed binary through the license/download endpoint. The public Git repository
contains `bin/.gitignore`, but does not commit `bin/zicboard-core`.

Commercial runtime routes require an active local core entitlement. Protected
server preparation, node configuration, subscription encryption and device
mapping are implemented inside the core binary rather than in public PHP code.

Build release binaries with:

```powershell
.\packaging\build-core.ps1 -Version 0.1.0
```

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
