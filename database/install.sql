-- Adminer 4.8.1 MySQL 5.7.29 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
                               `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
                               `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
                               `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
                               `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
                               `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
                               `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `v2_commission_log`;
CREATE TABLE `v2_commission_log` (
                                     `id` int(11) NOT NULL AUTO_INCREMENT,
                                     `invite_user_id` int(11) NOT NULL,
                                     `user_id` int(11) NOT NULL,
                                     `trade_no` char(36) NOT NULL,
                                     `order_amount` int(11) NOT NULL,
                                     `get_amount` int(11) NOT NULL,
                                     `created_at` int(11) NOT NULL,
                                     `updated_at` int(11) NOT NULL,
                                     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_coupon`;
CREATE TABLE `v2_coupon` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `code` varchar(255) NOT NULL,
                             `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
                             `type` tinyint(1) NOT NULL,
                             `value` int(11) NOT NULL,
                             `show` tinyint(1) NOT NULL DEFAULT '0',
                             `limit_use` int(11) DEFAULT NULL,
                             `limit_use_with_user` int(11) DEFAULT NULL,
                             `limit_plan_ids` varchar(255) DEFAULT NULL,
                             `limit_period` varchar(255) DEFAULT NULL,
                             `started_at` int(11) NOT NULL,
                             `ended_at` int(11) NOT NULL,
                             `created_at` int(11) NOT NULL,
                             `updated_at` int(11) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_giftcard`;
CREATE TABLE `v2_giftcard` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `code` varchar(255) NOT NULL,
                             `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
                             `type` tinyint(1) NOT NULL,
                             `value` int(11) DEFAULT NULL,
                             `plan_id` int(11) DEFAULT NULL,
                             `limit_use` int(11) DEFAULT NULL,
                             `used_user_ids` varchar(16384) DEFAULT NULL,
                             `started_at` int(11) NOT NULL,
                             `ended_at` int(11) NOT NULL,
                             `created_at` int(11) NOT NULL,
                             `updated_at` int(11) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_invite_code`;
CREATE TABLE `v2_invite_code` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `user_id` int(11) NOT NULL,
                                  `code` char(32) NOT NULL,
                                  `status` tinyint(1) NOT NULL DEFAULT '0',
                                  `pv` int(11) NOT NULL DEFAULT '0',
                                  `created_at` int(11) NOT NULL,
                                  `updated_at` int(11) NOT NULL,
                                  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_knowledge`;
CREATE TABLE `v2_knowledge` (
                                `id` int(11) NOT NULL AUTO_INCREMENT,
                                `language` char(5) NOT NULL COMMENT 'NgÃ´n ngá»¯',
                                `category` varchar(255) NOT NULL COMMENT 'TÃªn danh má»¥c',
                                `title` varchar(255) NOT NULL COMMENT 'TiÃªu Ä‘á»',
                                `body` text NOT NULL COMMENT 'Ná»™i dung',
                                `sort` int(11) DEFAULT NULL COMMENT 'Sáº¯p xáº¿p',
                                `show` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Hiá»ƒn thá»‹',
                                `created_at` int(11) NOT NULL COMMENT 'Thá»i gian táº¡o',
                                `updated_at` int(11) NOT NULL COMMENT 'Thá»i gian cáº­p nháº­t',
                                PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Kho kiáº¿n thá»©c';


DROP TABLE IF EXISTS `v2_log`;
CREATE TABLE `v2_log` (
                          `id` int(11) NOT NULL AUTO_INCREMENT,
                          `title` text NOT NULL,
                          `level` varchar(11) DEFAULT NULL,
                          `host` varchar(255) DEFAULT NULL,
                          `uri` varchar(255) NOT NULL,
                          `method` varchar(11) NOT NULL,
                          `data` text,
                          `ip` varchar(128) DEFAULT NULL,
                          `context` text,
                          `created_at` int(11) NOT NULL,
                          `updated_at` int(11) NOT NULL,
                          PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_mail_log`;
CREATE TABLE `v2_mail_log` (
                               `id` int(11) NOT NULL AUTO_INCREMENT,
                               `email` varchar(64) NOT NULL,
                               `subject` varchar(255) NOT NULL,
                               `template_name` varchar(255) NOT NULL,
                               `error` text,
                               `created_at` int(11) NOT NULL,
                               `updated_at` int(11) NOT NULL,
                               PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_notice`;
CREATE TABLE `v2_notice` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `title` varchar(255) NOT NULL,
                             `content` text NOT NULL,
                             `show` tinyint(1) NOT NULL DEFAULT '0',
                             `img_url` varchar(255) DEFAULT NULL,
                             `tags` varchar(255) DEFAULT NULL,
                             `created_at` int(11) NOT NULL,
                             `updated_at` int(11) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_order`;
CREATE TABLE `v2_order` (
                            `id` int(11) NOT NULL AUTO_INCREMENT,
                            `invite_user_id` int(11) DEFAULT NULL,
                            `manager_id` int(11) DEFAULT NULL,
                            `user_id` int(11) NOT NULL,
                            `subscription_id` int(11) DEFAULT NULL,
                            `plan_id` int(11) NOT NULL,
                            `coupon_id` int(11) DEFAULT NULL,
                            `payment_id` int(11) DEFAULT NULL,
                            `type` int(11) NOT NULL COMMENT '1 mua má»›i 2 gia háº¡n 3 nÃ¢ng cáº¥p',
                            `period` varchar(255) NOT NULL,
                            `trade_no` varchar(36) NOT NULL,
                            `callback_no` varchar(255) DEFAULT NULL,
                            `total_amount` int(11) NOT NULL,
                            `handling_amount` int(11) DEFAULT NULL,
                            `discount_amount` int(11) DEFAULT NULL,
                            `surplus_amount` int(11) DEFAULT NULL COMMENT 'GiÃ¡ trá»‹ cÃ²n láº¡i',
                            `refund_amount` int(11) DEFAULT NULL COMMENT 'Sá»‘ tiá»n hoÃ n',
                            `balance_amount` int(11) DEFAULT NULL COMMENT 'Sá»­ dá»¥ng sá»‘ dÆ°',
                            `surplus_order_ids` text COMMENT 'ÄÆ¡n hÃ ng cáº¥n trá»«',
                            `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 chá» thanh toÃ¡n 1 Ä‘ang kÃ­ch hoáº¡t 2 Ä‘Ã£ há»§y 3 hoÃ n táº¥t 4 Ä‘Ã£ cáº¥n trá»«',
                            `commission_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 chá» xÃ¡c nháº­n 1 Ä‘ang phÃ¡t 2 há»£p lá»‡ 3 khÃ´ng há»£p lá»‡',
                            `commission_balance` int(11) NOT NULL DEFAULT '0',
                            `actual_commission_balance` int(11) DEFAULT NULL COMMENT 'Hoa há»“ng thá»±c tráº£',
                            `paid_at` int(11) DEFAULT NULL,
                            `created_at` int(11) NOT NULL,
                            `updated_at` int(11) NOT NULL,
                            PRIMARY KEY (`id`),
                            UNIQUE KEY `trade_no` (`trade_no`),
                            INDEX idx_user (`user_id`),
                            INDEX idx_user_status (`user_id`, `status`),
                            INDEX idx_subscription (`subscription_id`),
                            INDEX idx_manager_id (`manager_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_payment`;
CREATE TABLE `v2_payment` (
                              `id` int(11) NOT NULL AUTO_INCREMENT,
                              `uuid` char(32) NOT NULL,
                              `payment` varchar(16) NOT NULL,
                              `name` varchar(255) NOT NULL,
                              `icon` varchar(255) DEFAULT NULL,
                              `config` text NOT NULL,
                              `notify_domain` varchar(128) DEFAULT NULL,
                              `handling_fee_fixed` int(11) DEFAULT NULL,
                              `handling_fee_percent` decimal(5,2) DEFAULT NULL,
                              `enable` tinyint(1) NOT NULL DEFAULT '0',
                              `sort` int(11) DEFAULT NULL,
                              `created_at` int(11) NOT NULL,
                              `updated_at` int(11) NOT NULL,
                              PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_plan`;
CREATE TABLE `v2_plan` (
                           `id` int(11) NOT NULL AUTO_INCREMENT,
                           `group_id` int(11) NOT NULL,
                           `transfer_enable` int(11) NOT NULL,
                           `device_limit` int(11) DEFAULT NULL,
                           `name` varchar(255) NOT NULL,
                           `speed_limit` int(11) DEFAULT NULL,
                            `show` tinyint(1) NOT NULL DEFAULT '0',
                            `sort` int(11) DEFAULT NULL,
                            `renew` tinyint(1) NOT NULL DEFAULT '1',
                            `allow_subscribe_url` tinyint(1) NOT NULL DEFAULT '1',
                            `content` text,
                           `month_price` int(11) DEFAULT NULL,
                           `quarter_price` int(11) DEFAULT NULL,
                           `half_year_price` int(11) DEFAULT NULL,
                           `year_price` int(11) DEFAULT NULL,
                           `two_year_price` int(11) DEFAULT NULL,
                           `three_year_price` int(11) DEFAULT NULL,
                           `onetime_price` int(11) DEFAULT NULL,
                           `reset_price` int(11) DEFAULT NULL,
                           `reset_traffic_method` tinyint(1) DEFAULT NULL,
                           `capacity_limit` int(11) DEFAULT NULL,
                           `created_at` int(11) NOT NULL,
                           `updated_at` int(11) NOT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_server_group`;
CREATE TABLE `v2_server_group` (
                                   `id` int(11) NOT NULL AUTO_INCREMENT,
                                   `name` varchar(255) NOT NULL,
                                   `created_at` int(11) NOT NULL,
                                   `updated_at` int(11) NOT NULL,
                                   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `v2_staff`;
CREATE TABLE `v2_staff` (
                            `id` int(11) NOT NULL AUTO_INCREMENT,
                            `status` tinyint(1) NOT NULL DEFAULT '1',
                            `user_id` int(11) NOT NULL,
                            `domain` varchar(255) NOT NULL,
                            `plan_id` JSON DEFAULT NULL,
                            `title` varchar(255) DEFAULT NULL,
                            `description` varchar(255) DEFAULT NULL,
                            `logo` varchar(255) DEFAULT NULL,
                            `background_url` varchar(255) DEFAULT NULL,
                            `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
                            `created_at` int(11) NOT NULL,
                            `updated_at` int(11) NOT NULL,
                            PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_server_tuic`;
CREATE TABLE `v2_server_tuic` (
                                      `id` int(11) NOT NULL AUTO_INCREMENT,
                                      `group_id` varchar(255) NOT NULL,
                                      `route_id` varchar(255) DEFAULT NULL,
                                      `name` varchar(255) NOT NULL,
                                      `parent_id` int(11) DEFAULT NULL,
                                      `host` varchar(255) NOT NULL,
                                      `port` varchar(11) NOT NULL,
                                      `server_port` int(11) NOT NULL,
                                      `tags` varchar(255) DEFAULT NULL,
                                      `load_ips` text DEFAULT NULL,
                                      `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                      `show` tinyint(1) NOT NULL DEFAULT '0',
                                      `check` tinyint(1) NOT NULL DEFAULT '0',
                                      `sort` int(11) DEFAULT NULL,
                                      `server_name` varchar(64) DEFAULT NULL,
                                      `tls_settings` text,
                                      `insecure` tinyint(1) NOT NULL DEFAULT '0',
                                      `disable_sni` tinyint(1) NOT NULL DEFAULT '0',
                                      `udp_relay_mode` varchar(64) DEFAULT NULL,
                                      `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0',
                                      `congestion_control` varchar(64) DEFAULT NULL,
                                      `created_at` int(11) NOT NULL,
                                      `updated_at` int(11) NOT NULL,
                                      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_server_hysteria`;
CREATE TABLE `v2_server_hysteria` (
                                      `id` int(11) NOT NULL AUTO_INCREMENT,
                                      `version` int(11) NOT NULL,
                                      `group_id` varchar(255) NOT NULL,
                                      `route_id` varchar(255) DEFAULT NULL,
                                      `name` varchar(255) NOT NULL,
                                      `parent_id` int(11) DEFAULT NULL,
                                      `host` varchar(255) NOT NULL,
                                      `port` varchar(11) NOT NULL,
                                      `server_port` int(11) NOT NULL,
                                      `tags` varchar(255) DEFAULT NULL,
                                      `load_ips` text DEFAULT NULL,
                                      `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                      `show` tinyint(1) NOT NULL DEFAULT '0',
                                      `check` tinyint(1) NOT NULL DEFAULT '0',
                                      `sort` int(11) DEFAULT NULL,
                                      `up_mbps` int(11) NOT NULL,
                                      `down_mbps` int(11) NOT NULL,
                                      `obfs` varchar(64) DEFAULT NULL,
                                      `obfs_password` varchar(255) DEFAULT NULL,
                                      `server_name` varchar(64) DEFAULT NULL,
                                      `tls_settings` text,
                                      `insecure` tinyint(1) NOT NULL DEFAULT '0',
                                      `created_at` int(11) NOT NULL,
                                      `updated_at` int(11) NOT NULL,
                                      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_server_route`;
CREATE TABLE `v2_server_route` (
                                   `id` int(11) NOT NULL AUTO_INCREMENT,
                                   `remarks` varchar(255) NOT NULL,
                                   `match` text NOT NULL,
                                   `action` varchar(11) NOT NULL,
                                   `action_value` text DEFAULT NULL,
                                   `created_at` int(11) NOT NULL,
                                   `updated_at` int(11) NOT NULL,
                                   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_server_shadowsocks`;
CREATE TABLE `v2_server_shadowsocks` (
                                         `id` int(11) NOT NULL AUTO_INCREMENT,
                                         `group_id` varchar(255) NOT NULL,
                                         `route_id` varchar(255) DEFAULT NULL,
                                         `parent_id` int(11) DEFAULT NULL,
                                         `tags` varchar(255) DEFAULT NULL,
                                         `load_ips` text DEFAULT NULL,
                                         `name` varchar(255) NOT NULL,
                                         `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                         `host` varchar(255) NOT NULL,
                                         `port` varchar(11) NOT NULL,
                                         `server_port` int(11) NOT NULL,
                                         `cipher` varchar(255) NOT NULL,
                                         `obfs` char(11) DEFAULT NULL,
                                         `obfs_settings` varchar(255) DEFAULT NULL,
                                         `show` tinyint(4) NOT NULL DEFAULT '0',
                                         `check` tinyint(1) NOT NULL DEFAULT '0',
                                         `sort` int(11) DEFAULT NULL,
                                         `created_at` int(11) NOT NULL,
                                         `updated_at` int(11) NOT NULL,
                                         PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_server_trojan`;
CREATE TABLE `v2_server_trojan` (
                                    `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID node',
                                    `group_id` varchar(255) NOT NULL COMMENT 'NhÃ³m node',
                                    `route_id` varchar(255) DEFAULT NULL,
                                    `parent_id` int(11) DEFAULT NULL COMMENT 'Node cha',
                                    `tags` varchar(255) DEFAULT NULL COMMENT 'NhÃ£n node',
                                    `load_ips` text DEFAULT NULL,
                                    `name` varchar(255) NOT NULL COMMENT 'TÃªn node',
                                    `rate` decimal(10,2) NOT NULL DEFAULT '1.00' COMMENT 'Há»‡ sá»‘',
                                    `host` varchar(255) NOT NULL COMMENT 'TÃªn host',
                                    `port` varchar(11) NOT NULL COMMENT 'Cá»•ng káº¿t ná»‘i',
                                    `server_port` int(11) NOT NULL COMMENT 'Cá»•ng dá»‹ch vá»¥',
                                    `network` varchar(11) DEFAULT NULL COMMENT 'Kiá»ƒu truyá»n táº£i',
                                    `network_settings` text COMMENT 'Cáº¥u hÃ¬nh truyá»n táº£i',
                                    `tls_settings` text,
                                    `allow_insecure` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Cho phÃ©p khÃ´ng báº£o máº­t',
                                    `server_name` varchar(255) DEFAULT NULL,
                                    `show` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'CÃ³ hiá»ƒn thá»‹',
                                    `check` tinyint(1) NOT NULL DEFAULT '0',
                                    `sort` int(11) DEFAULT NULL,
                                    `created_at` int(11) NOT NULL,
                                    `updated_at` int(11) NOT NULL,
                                    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='Báº£ng mÃ¡y chá»§ Trojan';


DROP TABLE IF EXISTS `v2_server_vless`;
CREATE TABLE `v2_server_vless` (
                                   `id` int(11) NOT NULL AUTO_INCREMENT,
                                   `group_id` text NOT NULL,
                                   `route_id` text,
                                   `name` varchar(255) NOT NULL,
                                   `parent_id` int(11) DEFAULT NULL,
                                   `host` varchar(255) NOT NULL,
                                   `port` int(11) NOT NULL,
                                   `server_port` int(11) NOT NULL,
                                   `tls` tinyint(1) NOT NULL,
                                   `tls_settings` text,
                                   `flow` varchar(64) DEFAULT NULL,
                                   `network` varchar(11) NOT NULL,
                                   `network_settings` text,
                                   `encryption` varchar(64) DEFAULT NULL,
                                   `encryption_settings` text,
                                   `tags` text,
                                   `load_ips` text DEFAULT NULL,
                                   `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                   `show` tinyint(1) NOT NULL DEFAULT '0',
                                   `check` tinyint(1) NOT NULL DEFAULT '0',
                                   `sort` int(11) DEFAULT NULL,
                                   `created_at` int(11) NOT NULL,
                                   `updated_at` int(11) NOT NULL,
                                   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_server_vmess`;
CREATE TABLE `v2_server_vmess` (
                                   `id` int(11) NOT NULL AUTO_INCREMENT,
                                   `group_id` varchar(255) NOT NULL,
                                   `route_id` varchar(255) DEFAULT NULL,
                                   `name` varchar(255) NOT NULL,
                                   `parent_id` int(11) DEFAULT NULL,
                                   `host` varchar(255) NOT NULL,
                                   `port` varchar(11) NOT NULL,
                                   `server_port` int(11) NOT NULL,
                                   `tls` tinyint(4) NOT NULL DEFAULT '0',
                                   `tags` varchar(255) DEFAULT NULL,
                                   `load_ips` text DEFAULT NULL,
                                   `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                   `network` varchar(11) NOT NULL,
                                   `rules` text,
                                   `networkSettings` text,
                                   `tlsSettings` text,
                                   `ruleSettings` text,
                                   `dnsSettings` text,
                                   `show` tinyint(1) NOT NULL DEFAULT '0',
                                   `check` tinyint(1) NOT NULL DEFAULT '0',
                                   `sort` int(11) DEFAULT NULL,
                                   `created_at` int(11) NOT NULL,
                                   `updated_at` int(11) NOT NULL,
                                   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `v2_server_anytls`;
CREATE TABLE `v2_server_anytls` (
                                      `id` int(11) NOT NULL AUTO_INCREMENT,
                                      `group_id` varchar(255) NOT NULL,
                                      `route_id` varchar(255) DEFAULT NULL,
                                      `name` varchar(255) NOT NULL,
                                      `parent_id` int(11) DEFAULT NULL,
                                      `host` varchar(255) NOT NULL,
                                      `port` varchar(11) NOT NULL,
                                      `server_port` int(11) NOT NULL,
                                      `tags` varchar(255) DEFAULT NULL,
                                      `load_ips` text DEFAULT NULL,
                                      `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                      `show` tinyint(1) NOT NULL DEFAULT '0',
                                      `check` tinyint(1) NOT NULL DEFAULT '0',
                                      `sort` int(11) DEFAULT NULL,
                                      `server_name` varchar(64) DEFAULT NULL,
                                      `tls_settings` text,
                                      `insecure` tinyint(1) NOT NULL DEFAULT '0',
                                      `padding_scheme` text,
                                      `created_at` int(11) NOT NULL,
                                      `updated_at` int(11) NOT NULL,
                                      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `v2_server_zicnode`;
CREATE TABLE `v2_server_zicnode` (
                                    `id` int(11) NOT NULL AUTO_INCREMENT,
                                    `group_id` varchar(255) NOT NULL,
                                    `route_id` varchar(255) DEFAULT NULL,
                                    `name` varchar(255) NOT NULL,
                                    `parent_id` int(11) DEFAULT NULL,
                                    `host` varchar(255) NOT NULL,
                                    `listen_ip` varchar(255) NOT NULL DEFAULT '0.0.0.0',
                                    `port` varchar(11) NOT NULL,
                                    `server_port` int(11) NOT NULL,
                                    `tags` varchar(255) DEFAULT NULL,
                                    `load_ips` text DEFAULT NULL,
                                    `rate` decimal(10,2) NOT NULL DEFAULT '1.00',
                                    `show` tinyint(1) NOT NULL DEFAULT '0',
                                    `check` tinyint(1) NOT NULL DEFAULT '0',
                                    `sort` int(11) DEFAULT NULL,
                                    `protocol` varchar(24) NOT NULL COMMENT 'Loáº¡i giao thá»©c',
                                    `tls` tinyint(1) NOT NULL COMMENT 'Loáº¡i TLS',
                                    `tls_settings` text COMMENT 'Cáº¥u hÃ¬nh TLS',
                                    `flow` varchar(64) DEFAULT NULL COMMENT 'Flow control VLESS',
                                    `network` varchar(11) NOT NULL COMMENT 'Kiá»ƒu truyá»n táº£i',
                                    `network_settings` text COMMENT 'Cáº¥u hÃ¬nh truyá»n táº£i',
                                    `encryption` varchar(64) DEFAULT NULL COMMENT 'MÃ£ hÃ³a VLESS',
                                    `encryption_settings` text COMMENT 'Cáº¥u hÃ¬nh mÃ£ hÃ³a VLESS',
                                    `disable_sni` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'TUIC táº¯t SNI',
                                    `udp_relay_mode` varchar(64) DEFAULT NULL COMMENT 'Cháº¿ Ä‘á»™ relay UDP TUIC',
                                    `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Báº¯t tay TUIC 0-RTT',
                                    `congestion_control` varchar(64) DEFAULT NULL COMMENT 'Kiá»ƒm soÃ¡t táº¯c ngháº½n TUIC',
                                    `cipher` varchar(64) DEFAULT NULL COMMENT 'Kiá»ƒu mÃ£ hÃ³a Shadowsocks',
                                    `up_mbps` int(11) NOT NULL COMMENT 'BÄƒng thÃ´ng táº£i lÃªn Hysteria',
                                    `down_mbps` int(11) NOT NULL COMMENT 'BÄƒng thÃ´ng táº£i xuá»‘ng Hysteria',
                                    `obfs` varchar(64) DEFAULT NULL COMMENT 'Máº­t kháº©u obfs Hysteria1 / kiá»ƒu obfs Hysteria2',
                                    `obfs_password` varchar(255) DEFAULT NULL COMMENT 'Máº­t kháº©u obfs Hysteria2',
                                    `padding_scheme` text COMMENT 'Cáº¥u hÃ¬nh padding AnyTLS',
                                    `warp_settings` text COMMENT 'WARP outbound settings',
                                    `created_at` int(11) NOT NULL,
                                    `updated_at` int(11) NOT NULL,
                                    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `v2_stat`;
CREATE TABLE `v2_stat` (
                           `id` int(11) NOT NULL AUTO_INCREMENT,
                           `record_at` int(11) NOT NULL,
                           `record_type` char(1) NOT NULL,
                           `order_count` int(11) NOT NULL COMMENT 'Sá»‘ lÆ°á»£ng Ä‘Æ¡n hÃ ng',
                           `order_total` int(11) NOT NULL COMMENT 'Tá»•ng Ä‘Æ¡n hÃ ng',
                           `commission_count` int(11) NOT NULL,
                           `commission_total` int(11) NOT NULL COMMENT 'Tá»•ng hoa há»“ng',
                           `paid_count` int(11) NOT NULL,
                           `paid_total` int(11) NOT NULL,
                           `register_count` int(11) NOT NULL,
                           `invite_count` int(11) NOT NULL,
                           `transfer_used_total` varchar(32) NOT NULL,
                           `created_at` int(11) NOT NULL,
                           `updated_at` int(11) NOT NULL,
                           PRIMARY KEY (`id`),
                           UNIQUE KEY `record_at` (`record_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Thá»‘ng kÃª Ä‘Æ¡n hÃ ng';


DROP TABLE IF EXISTS `v2_stat_online_user`;
CREATE TABLE `v2_stat_online_user` (
                                      `id` int(11) NOT NULL AUTO_INCREMENT,
                                      `online_user` int(11) NOT NULL DEFAULT '0',
                                      `record_at` int(11) NOT NULL,
                                      `created_at` int(11) NOT NULL DEFAULT '0',
                                      `updated_at` int(11) NOT NULL DEFAULT '0',
                                      PRIMARY KEY (`id`),
                                      UNIQUE KEY `record_at` (`record_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
DROP TABLE IF EXISTS `v2_stat_server`;
CREATE TABLE `v2_stat_server` (
                                  `id` int(11) NOT NULL AUTO_INCREMENT,
                                  `server_id` int(11) NOT NULL COMMENT 'ID node',
                                  `server_type` char(11) NOT NULL COMMENT 'Loáº¡i node',
                                  `u` bigint(20) NOT NULL,
                                  `d` bigint(20) NOT NULL,
                                  `record_type` char(1) NOT NULL COMMENT 'd day m month',
                                  `record_at` int(11) NOT NULL COMMENT 'Thá»i gian ghi nháº­n',
                                  `created_at` int(11) NOT NULL,
                                  `updated_at` int(11) NOT NULL,
                                  PRIMARY KEY (`id`),
                                  UNIQUE KEY `server_id_server_type_record_at` (`server_id`,`server_type`,`record_at`),
                                  KEY `record_at` (`record_at`),
                                  KEY `server_id` (`server_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Thá»‘ng kÃª dá»¯ liá»‡u node';


DROP TABLE IF EXISTS `v2_stat_user`;
CREATE TABLE `v2_stat_user` (
                                `id` int(11) NOT NULL AUTO_INCREMENT,
                                `user_id` int(11) NOT NULL,
                                `subscription_id` int(11) DEFAULT NULL,
                                `server_rate` decimal(10,2) NOT NULL,
                                `u` bigint(20) NOT NULL,
                                `d` bigint(20) NOT NULL,
                                `record_type` char(2) NOT NULL,
                                `record_at` int(11) NOT NULL,
                                `created_at` int(11) NOT NULL,
                                `updated_at` int(11) NOT NULL,
                                PRIMARY KEY (`id`),
                                UNIQUE KEY `server_rate_subscription_id_record_at` (`server_rate`,`subscription_id`,`record_at`),
                                KEY `user_id` (`user_id`),
                                KEY `subscription_id` (`subscription_id`),
                                KEY `record_at` (`record_at`),
                                KEY `server_rate` (`server_rate`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


DROP TABLE IF EXISTS `v2_ticket`;
CREATE TABLE `v2_ticket` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `user_id` int(11) NOT NULL,
                             `subject` varchar(255) NOT NULL,
                             `level` tinyint(1) NOT NULL,
                             `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: Ä‘ang báº­t 1: Ä‘Ã£ táº¯t',
                             `reply_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: chá» pháº£n há»“i 1: Ä‘Ã£ pháº£n há»“i',
                             `created_at` int(11) NOT NULL,
                             `updated_at` int(11) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_ticket_message`;
CREATE TABLE `v2_ticket_message` (
                                     `id` int(11) NOT NULL AUTO_INCREMENT,
                                     `user_id` int(11) NOT NULL,
                                     `ticket_id` int(11) NOT NULL,
                                     `message` text CHARACTER SET utf8mb4 NOT NULL,
                                     `created_at` int(11) NOT NULL,
                                     `updated_at` int(11) NOT NULL,
                                     PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `v2_user`;
CREATE TABLE `v2_user` (
                           `id` int(11) NOT NULL AUTO_INCREMENT,
                           `invite_user_id` int(11) DEFAULT NULL,
                           `telegram_id` bigint(20) DEFAULT NULL,
                           `email` varchar(64) NOT NULL,
                           `billing_name` varchar(128) DEFAULT NULL,
                           `billing_tax_code` varchar(32) DEFAULT NULL,
                           `billing_phone` varchar(32) DEFAULT NULL,
                           `billing_address` varchar(255) DEFAULT NULL,
                           `password` varchar(64) NOT NULL,
                           `password_algo` char(10) DEFAULT NULL,
                           `password_salt` char(10) DEFAULT NULL,
                           `balance` int(11) NOT NULL DEFAULT '0',
                           `discount` int(11) DEFAULT NULL,
                           `commission_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0: system 1: period 2: onetime',
                           `commission_rate` int(11) DEFAULT NULL,
                           `commission_balance` int(11) NOT NULL DEFAULT '0',
                           `t` int(11) NOT NULL DEFAULT '0',
                           `u` bigint(20) NOT NULL DEFAULT '0',
                           `d` bigint(20) NOT NULL DEFAULT '0',
                           `transfer_enable` bigint(20) NOT NULL DEFAULT '0',
                           `device_limit` int(11) DEFAULT NULL,
                           `banned` tinyint(1) NOT NULL DEFAULT '0',
                           `is_admin` tinyint(1) NOT NULL DEFAULT '0',
                           `last_login_at` int(11) DEFAULT NULL,
                           `is_staff` tinyint(1) NOT NULL DEFAULT '0',
                           `is_manager` tinyint(1) NOT NULL DEFAULT '0',
                           `last_login_ip` int(11) DEFAULT NULL,
                           `uuid` varchar(36) NOT NULL,
                           `group_id` int(11) DEFAULT NULL,
                           `plan_id` int(11) DEFAULT NULL,
                           `speed_limit` int(11) DEFAULT NULL,
                           `auto_renewal` tinyint(4) DEFAULT '0',
                           `remind_expire` tinyint(4) DEFAULT '1',
                           `remind_traffic` tinyint(4) DEFAULT '1',
                           `token` char(32) NOT NULL,
                           `expired_at` bigint(20) DEFAULT '0',
                           `remarks` text,
                           `created_at` int(11) NOT NULL,
                           `updated_at` int(11) NOT NULL,
                           PRIMARY KEY (`id`),
                           UNIQUE KEY `email` (`email`),
                           UNIQUE KEY `token` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `v2_user_subscription`;
CREATE TABLE `v2_user_subscription` (
                                        `id` int(11) NOT NULL AUTO_INCREMENT,
                                        `user_id` int(11) NOT NULL,
                                        `plan_id` int(11) DEFAULT NULL,
                                        `group_id` int(11) DEFAULT NULL,
                                        `speed_limit` int(11) DEFAULT NULL,
                                        `device_limit` int(11) DEFAULT NULL,
                                        `t` int(11) NOT NULL DEFAULT '0',
                                        `u` bigint(20) NOT NULL DEFAULT '0',
                                        `d` bigint(20) NOT NULL DEFAULT '0',
                                        `transfer_enable` bigint(20) NOT NULL DEFAULT '0',
                                        `expired_at` bigint(20) DEFAULT '0',
                                        `auto_renewal` tinyint(4) NOT NULL DEFAULT '0',
                                        `remind_expire` tinyint(4) NOT NULL DEFAULT '1',
                                        `remind_traffic` tinyint(4) NOT NULL DEFAULT '1',
                                        `token` char(32) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
                                        `uuid` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
                                        `status` varchar(16) NOT NULL DEFAULT 'active',
                                        `origin_order_id` int(11) DEFAULT NULL,
                                        `last_order_id` int(11) DEFAULT NULL,
                                        `name_sni` varchar(255) DEFAULT NULL,
                                        `network_settings` varchar(255) DEFAULT NULL,
                                        `remarks` text,
                                        `user_note` varchar(255) DEFAULT NULL,
                                        `created_at` int(11) NOT NULL,
                                        `updated_at` int(11) NOT NULL,
                                        PRIMARY KEY (`id`),
                                        UNIQUE KEY `v2_user_subscription_token_unique` (`token`),
                                        UNIQUE KEY `v2_user_subscription_uuid_unique` (`uuid`),
                                        KEY `v2_user_subscription_user_id_index` (`user_id`),
                                        KEY `v2_user_subscription_plan_id_index` (`plan_id`),
                                        KEY `v2_user_subscription_group_id_index` (`group_id`),
                                        KEY `v2_user_subscription_status_index` (`status`),
                                        KEY `v2_user_subscription_user_status_index` (`user_id`,`status`),
                                        KEY `v2_user_subscription_status_user_index` (`status`,`user_id`),
                                        CONSTRAINT `v2_user_subscription_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

DROP TABLE IF EXISTS `v2_happ_subscribe_cache`;
CREATE TABLE `v2_happ_subscribe_cache` (
                              `id` int(11) NOT NULL AUTO_INCREMENT,
                              `cache_key` varchar(96) NOT NULL,
                              `encrypted_url` text NOT NULL,
                              `expires_at` int(11) NOT NULL,
                              `stale_until` int(11) NOT NULL,
                              `created_at` int(11) NOT NULL,
                              `updated_at` int(11) NOT NULL,
                              PRIMARY KEY (`id`),
                              UNIQUE KEY `v2_happ_subscribe_cache_key_unique` (`cache_key`),
                              KEY `v2_happ_subscribe_cache_expires_at_index` (`expires_at`),
                              KEY `v2_happ_subscribe_cache_stale_until_index` (`stale_until`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `v2_user_device`;
CREATE TABLE `v2_user_device` (
                              `id` int(11) NOT NULL AUTO_INCREMENT,
                              `user_id` int(11) NOT NULL,
                              `subscription_id` int(11) NOT NULL,
                              `uuid` char(36) NOT NULL,
                              `hwid_hash` char(64) DEFAULT NULL,
                              `hwid` varchar(255) DEFAULT NULL,
                              `status` varchar(16) NOT NULL DEFAULT 'pending',
                              `user_agent` varchar(255) DEFAULT NULL,
                              `first_ip` varchar(128) DEFAULT NULL,
                              `last_ip` varchar(128) DEFAULT NULL,
                              `first_seen_at` int(11) DEFAULT NULL,
                              `last_seen_at` int(11) DEFAULT NULL,
                              `u` bigint(20) NOT NULL DEFAULT '0',
                              `d` bigint(20) NOT NULL DEFAULT '0',
                              `t` int(11) DEFAULT NULL,
                              `created_at` int(11) NOT NULL,
                              `updated_at` int(11) NOT NULL,
                              PRIMARY KEY (`id`),
                              UNIQUE KEY `v2_user_device_uuid_unique` (`uuid`),
                              UNIQUE KEY `v2_user_device_subscription_hwid_unique` (`subscription_id`,`hwid_hash`),
                              KEY `v2_user_device_user_id_index` (`user_id`),
                              KEY `v2_user_device_subscription_id_index` (`subscription_id`),
                              KEY `v2_user_device_status_index` (`status`),
                              KEY `v2_user_device_last_seen_index` (`last_seen_at`),
                              CONSTRAINT `v2_user_device_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE,
                              CONSTRAINT `v2_user_device_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `v2_user_subscription` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- 2025-09-12 10:05:00
