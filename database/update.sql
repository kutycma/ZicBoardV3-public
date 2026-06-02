ALTER TABLE `v2_server`
ADD `last_check_at` int(11) NULL AFTER `rate`;

ALTER TABLE `v2_server`
ADD `network` varchar(11) COLLATE 'utf8_general_ci' NOT NULL AFTER `rate`;

ALTER TABLE `v2_server`
ADD `settings` text COLLATE 'utf8_general_ci' NULL AFTER `network`;

ALTER TABLE `v2_server`
ADD `show` tinyint(1) NOT NULL DEFAULT '0' AFTER `settings`;

ALTER TABLE `v2_user`
CHANGE `enable` `enable` tinyint(1) NOT NULL DEFAULT '1' AFTER `transfer_enable`;

ALTER TABLE `v2_order`
ADD `type` int(11) NOT NULL COMMENT '1 mua mới 2 gia hạn 3 nâng cấp' AFTER `plan_id`;

ALTER TABLE `v2_user`
ADD `commission_rate` int(11) NULL AFTER `password`;

ALTER TABLE `v2_user`
ADD `balance` int(11) NOT NULL DEFAULT '0' AFTER `password`;

CREATE TABLE `v2_notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
);

ALTER TABLE `v2_notice`
ADD `img_url` varchar(255) COLLATE 'utf8_general_ci' NULL AFTER `content`;

CREATE TABLE `v2_ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `level` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `v2_ticket_message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `ticket_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `v2_ticket`
ADD `last_reply_user_id` int(11) NOT NULL AFTER `user_id`;

ALTER TABLE `v2_user`
CHANGE `last_login_at` `last_login_at` int(11) NULL AFTER `is_admin`;

ALTER TABLE `v2_server_log`
CHANGE `node_id` `server_id` int(11) NOT NULL AFTER `user_id`,
CHANGE `u` `u` varchar(255) COLLATE 'utf8_general_ci' NOT NULL AFTER `server_id`,
CHANGE `d` `d` varchar(255) COLLATE 'utf8_general_ci' NOT NULL AFTER `u`,
CHANGE `rate` `rate` int(11) NOT NULL AFTER `d`;

ALTER TABLE `v2_server`
DROP `last_check_at`;

ALTER TABLE `v2_server`
CHANGE `name` `name` varchar(255) COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `group_id`;

ALTER TABLE `v2_plan`
CHANGE `month_price` `month_price` int(11) NULL DEFAULT '0' AFTER `content`,
CHANGE `quarter_price` `quarter_price` int(11) NULL DEFAULT '0' AFTER `month_price`,
CHANGE `half_year_price` `half_year_price` int(11) NULL DEFAULT '0' AFTER `quarter_price`,
CHANGE `year_price` `year_price` int(11) NULL DEFAULT '0' AFTER `half_year_price`;

ALTER TABLE `v2_server`
ADD `parent_id` int(11) NULL AFTER `group_id`;

CREATE TABLE `v2_mail_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(64) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `template_name` varchar(255) NOT NULL,
  `error` varchar(255) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
);

CREATE TABLE `v2_coupon` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `code` char(32) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `type` tinyint(1) NOT NULL,
  `value` int(11) NOT NULL,
  `limit_use` int(11) DEFAULT NULL,
  `started_at` int(11) NOT NULL,
  `ended_at` int(11) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
);

ALTER TABLE `v2_order`
ADD `discount_amount` int(11) NULL AFTER `total_amount`;

ALTER TABLE `v2_server_log`
CHANGE `rate` `rate` decimal(10,2) NOT NULL AFTER `d`;

ALTER TABLE `v2_order`
DROP `method`;

ALTER TABLE `v2_invite_code`
ADD `pv` int(11) NOT NULL DEFAULT '0' AFTER `status`;

ALTER TABLE `v2_user`
ADD `password_algo` char(10) COLLATE 'utf8_general_ci' NULL AFTER `password`;

ALTER TABLE `v2_server`
CHANGE `tls` `tls` tinyint(4) NOT NULL DEFAULT '0' AFTER `server_port`;

ALTER TABLE `v2_server`
ADD `rules` text COLLATE 'utf8_general_ci' NULL AFTER `settings`;

CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE `v2_user`
ADD `discount` int(11) NULL AFTER `balance`;

ALTER TABLE `v2_order`
ADD `surplus_amount` int(11) NULL COMMENT 'Giá trị còn lại' AFTER `discount_amount`;

ALTER TABLE `v2_order`
ADD `refund_amount` int(11) NULL COMMENT 'Số tiền hoàn' AFTER `surplus_amount`;

ALTER TABLE `v2_tutorial`
ADD `category_id` int(11) NOT NULL AFTER `id`;

ALTER TABLE `v2_tutorial`
DROP `description`;

ALTER TABLE `v2_plan`
CHANGE `month_price` `month_price` int(11) NULL AFTER `content`,
CHANGE `quarter_price` `quarter_price` int(11) NULL AFTER `month_price`,
CHANGE `half_year_price` `half_year_price` int(11) NULL AFTER `quarter_price`,
CHANGE `year_price` `year_price` int(11) NULL AFTER `half_year_price`,
ADD `onetime_price` int(11) NULL AFTER `year_price`;

ALTER TABLE `v2_user`
DROP `enable`,
ADD `banned` tinyint(1) NOT NULL DEFAULT '0' AFTER `transfer_enable`;

ALTER TABLE `v2_user`
CHANGE `expired_at` `expired_at` bigint(20) NULL DEFAULT '0' AFTER `token`;

ALTER TABLE `v2_tutorial`
DROP `icon`;

ALTER TABLE `v2_server`
CHANGE `settings` `networkSettings` text COLLATE 'utf8_general_ci' NULL AFTER `network`,
CHANGE `rules` `ruleSettings` text COLLATE 'utf8_general_ci' NULL AFTER `networkSettings`;

ALTER TABLE `v2_server`
CHANGE `tags` `tags` varchar(255) COLLATE 'utf8_general_ci' NULL AFTER `server_port`,
CHANGE `rate` `rate` varchar(11) COLLATE 'utf8_general_ci' NOT NULL AFTER `tags`,
CHANGE `network` `network` varchar(11) COLLATE 'utf8_general_ci' NOT NULL AFTER `rate`,
CHANGE `networkSettings` `networkSettings` text COLLATE 'utf8_general_ci' NULL AFTER `network`,
CHANGE `tls` `tls` tinyint(4) NOT NULL DEFAULT '0' AFTER `networkSettings`,
ADD `tlsSettings` text COLLATE 'utf8_general_ci' NULL AFTER `tls`;

ALTER TABLE `v2_order`
ADD `balance_amount` int(11) NULL COMMENT 'Sử dụng số dư' AFTER `refund_amount`;

ALTER TABLE `v2_server`
CHANGE `network` `network` text COLLATE 'utf8_general_ci' NOT NULL AFTER `rate`,
ADD `dnsSettings` text COLLATE 'utf8_general_ci' NULL AFTER `ruleSettings`;

ALTER TABLE `v2_order`
ADD `surplus_order_ids` text NULL COMMENT 'Đơn hàng cấn trừ' AFTER `balance_amount`;

ALTER TABLE `v2_order`
CHANGE `status` `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 chờ thanh toán 1 đang kích hoạt 2 đã hủy 3 hoàn tất 4 đã cấn trừ' AFTER `surplus_order_ids`;

CREATE TABLE `v2_server_stat` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `server_id` int(11) NOT NULL,
  `u` varchar(255) NOT NULL,
  `d` varchar(25) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
);

ALTER TABLE `v2_tutorial`
ADD `sort` int(11) NULL AFTER `show`;

ALTER TABLE `v2_server`
ADD `sort` int(11) NULL AFTER `show`;

ALTER TABLE `v2_plan`
ADD `sort` int(11) NULL AFTER `show`;

ALTER TABLE `v2_plan`
CHANGE `month_price` `month_price` int(11) NULL AFTER `content`,
CHANGE `quarter_price` `quarter_price` int(11) NULL AFTER `month_price`,
CHANGE `half_year_price` `half_year_price` int(11) NULL AFTER `quarter_price`,
CHANGE `year_price` `year_price` int(11) NULL AFTER `half_year_price`,
ADD `reset_price` int(11) NULL AFTER `onetime_price`;

ALTER TABLE `v2_server_log`
ADD `id` bigint NOT NULL AUTO_INCREMENT PRIMARY KEY FIRST;

ALTER TABLE `v2_server_log`
ADD `log_at` int(11) NOT NULL AFTER `rate`;

ALTER TABLE `v2_mail_log`
CHANGE `error` `error` text COLLATE 'utf8_general_ci' NULL AFTER `template_name`;

ALTER TABLE `v2_plan`
CHANGE `month_price` `month_price` int(11) NULL AFTER `content`,
CHANGE `quarter_price` `quarter_price` int(11) NULL AFTER `month_price`,
CHANGE `half_year_price` `half_year_price` int(11) NULL AFTER `quarter_price`,
CHANGE `year_price` `year_price` int(11) NULL AFTER `half_year_price`;

ALTER TABLE `v2_server_log`
ADD INDEX log_at (`log_at`);

ALTER TABLE `v2_user`
ADD `telegram_id` bigint NULL AFTER `invite_user_id`;

ALTER TABLE `v2_server_stat`
ADD `online` int(11) NOT NULL AFTER `d`;

ALTER TABLE `v2_server_stat`
ADD INDEX `created_at` (`created_at`);

CREATE TABLE `v2_server_trojan` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `group_id` varchar(255) NOT NULL,
  `tags` varchar(255) NULL,
  `name` varchar(255) NOT NULL,
  `host` varchar(255) NOT NULL,
  `port` int(11) NOT NULL,
  `show` tinyint(1) NOT NULL DEFAULT '0',
  `sort` int(11) NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
) COMMENT='Bảng máy chủ Trojan' COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_server_stat`
CHANGE `d` `d` varchar(255) COLLATE 'utf8_general_ci' NOT NULL AFTER `u`,
DROP `online`;

ALTER TABLE `v2_user`
CHANGE `v2ray_uuid` `uuid` varchar(36) COLLATE 'utf8_general_ci' NOT NULL AFTER `last_login_ip`;

ALTER TABLE `v2_server_trojan`
ADD `rate` varchar(11) COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `name`;

ALTER TABLE `v2_server_log`
ADD `method` varchar(255) NOT NULL AFTER `rate`;

ALTER TABLE `v2_coupon`
ADD `limit_plan_ids` varchar(255) NULL AFTER `limit_use`;

ALTER TABLE `v2_server_trojan`
ADD `server_port` int(11) NOT NULL AFTER `port`;

ALTER TABLE `v2_server_trojan`
ADD `parent_id` int(11) NULL AFTER `group_id`;

ALTER TABLE `v2_server_trojan`
ADD `allow_insecure` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Cho phép không bảo mật' AFTER `server_port`,
CHANGE `show` `show` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Có hiển thị' AFTER `allow_insecure`;

ALTER TABLE `v2_server_trojan`
ADD `server_name` varchar(255) NULL AFTER `allow_insecure`;

UPDATE `v2_server` SET
`ruleSettings` = NULL
WHERE `ruleSettings` = '{}';

ALTER TABLE `v2_plan`
ADD `two_year_price` int(11) NULL AFTER `year_price`,
ADD `three_year_price` int(11) NULL AFTER `two_year_price`;

ALTER TABLE `v2_user`
ADD `is_staff` tinyint(1) NOT NULL DEFAULT '0' AFTER `is_admin`;

CREATE TABLE `v2_server_shadowsocks` (
  `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `group_id` varchar(255) NOT NULL,
  `parent_id` int(11) NULL,
  `tags` varchar(255) NULL,
  `name` varchar(255) NOT NULL,
  `rate` varchar(11) NOT NULL,
  `host` varchar(255) NOT NULL,
  `port` int(11) NOT NULL,
  `server_port` int(11) NOT NULL,
  `cipher` varchar(255) NOT NULL,
  `show` tinyint NOT NULL DEFAULT '0',
  `sort` int(11) NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL
) COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_coupon`
CHANGE `code` `code` varchar(255) COLLATE 'utf8_general_ci' NOT NULL AFTER `id`;

CREATE TABLE `v2_knowledge` (
  `id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `language` char(5) NOT NULL COMMENT 'Ngôn ngữ',
  `category` varchar(255) NOT NULL COMMENT 'Tên danh mục',
  `title` varchar(255) NOT NULL COMMENT 'Tiêu đề',
  `body` text NOT NULL COMMENT 'Nội dung',
  `sort` int(11) NULL COMMENT 'Sắp xếp',
  `show` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Hiển thị',
  `created_at` int(11) NOT NULL COMMENT 'Thời gian tạo',
  `updated_at` int(11) NOT NULL COMMENT 'Thời gian cập nhật'
) COMMENT='Kho kiến thức' COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_order`
ADD `coupon_id` int(11) NULL AFTER `plan_id`;

ALTER TABLE `v2_server_stat`
ADD `method` varchar(255) NOT NULL AFTER `server_id`;

ALTER TABLE `v2_server`
ADD `alter_id` int(11) NOT NULL DEFAULT '1' AFTER `network`;

ALTER TABLE `v2_user`
DROP `v2ray_alter_id`,
DROP `v2ray_level`;

DROP TABLE `v2_server_stat`;

CREATE TABLE `v2_stat_server` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `server_id` int(11) NOT NULL COMMENT 'ID node',
  `server_type` char(11) NOT NULL COMMENT 'Loại node',
  `u` varchar(255) NOT NULL,
  `d` varchar(255) NOT NULL,
  `record_type` char(1) NOT NULL COMMENT 'd day m month',
  `record_at` int(11) NOT NULL COMMENT 'Thời gian ghi nhận',
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Thống kê dữ liệu node';

ALTER TABLE `v2_stat_server`
ADD UNIQUE `server_id_server_type_record_at` (`server_id`, `server_type`, `record_at`);

ALTER TABLE `v2_stat_server`
ADD INDEX `record_at` (`record_at`),
ADD INDEX `server_id` (`server_id`);

ALTER TABLE `v2_user`
DROP `enable`;

ALTER TABLE `v2_user`
    ADD `remarks` text COLLATE 'utf8_general_ci' NULL AFTER `token`;

CREATE TABLE `v2_payment` (
                              `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                              `payment` varchar(16) NOT NULL,
                              `name` varchar(255) NOT NULL,
                              `config` text NOT NULL,
                              `enable` tinyint(1) NOT NULL DEFAULT '0',
                              `sort` int(11) DEFAULT NULL,
                              `created_at` int(11) NOT NULL,
                              `updated_at` int(11) NOT NULL
) COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_order`
    ADD `payment_id` int(11) NULL AFTER `coupon_id`;

ALTER TABLE `v2_payment`
    ADD `uuid` char(32) NOT NULL AFTER `id`;

ALTER TABLE `v2_user`
    ADD UNIQUE `email_deleted_at` (`email`, `deleted_at`),
DROP INDEX `email`;

ALTER TABLE `v2_user`
DROP `deleted_at`;

ALTER TABLE `v2_user`
    ADD UNIQUE `email` (`email`),
DROP INDEX `email_deleted_at`;

ALTER TABLE `v2_user`
    ADD `commission_type` tinyint NOT NULL DEFAULT '0' COMMENT '0: system 1: cycle 2: onetime' AFTER `discount`;

ALTER TABLE `v2_order`
    ADD `paid_at` int(11) NULL AFTER `commission_balance`;

ALTER TABLE `v2_server_log`
    ADD INDEX `user_id` (`user_id`),
ADD INDEX `server_id` (`server_id`);

ALTER TABLE `v2_ticket_message`
    CHANGE `message` `message` text COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `ticket_id`;

ALTER TABLE `v2_coupon`
    ADD `limit_use_with_user` int(11) NULL AFTER `limit_use`;

ALTER TABLE `v2_user`
    ADD `password_salt` char(10) COLLATE 'utf8_general_ci' NULL AFTER `password_algo`;

CREATE TABLE `v2_commission_log` (
                                     `id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
                                     `invite_user_id` int(11) NOT NULL,
                                     `user_id` int(11) NOT NULL,
                                     `trade_no` char(36) NOT NULL,
                                     `order_amount` int(11) NOT NULL,
                                     `get_amount` int(11) NOT NULL,
                                     `created_at` int(11) NOT NULL,
                                     `updated_at` int(11) NOT NULL
) COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_plan`
    ADD `reset_traffic_method` tinyint(1) NULL AFTER `reset_price`;

ALTER TABLE `v2_server`
    RENAME TO `v2_server_v2ray`;

ALTER TABLE `v2_payment`
    ADD `icon` varchar(255) COLLATE 'utf8mb4_general_ci' NULL AFTER `name`;

ALTER TABLE `v2_coupon`
    ADD `limit_period` varchar(255) COLLATE 'utf8_general_ci' NULL AFTER `limit_plan_ids`;

ALTER TABLE `v2_order`
    CHANGE `cycle` `period` varchar(255) COLLATE 'utf8_general_ci' NOT NULL AFTER `type`;

ALTER TABLE `v2_server_v2ray`
DROP `alter_id`;

ALTER TABLE `v2_user`
    CHANGE `commission_type` `commission_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0: system 1: period 2: onetime' AFTER `discount`;

ALTER TABLE `v2_coupon`
    ADD `show` tinyint(1) NOT NULL DEFAULT '0' AFTER `value`;

ALTER TABLE `v2_notice`
    ADD `show` tinyint(1) NOT NULL DEFAULT '0' AFTER `content`;

ALTER TABLE `v2_order`
    ADD `actual_commission_balance` int(11) NULL COMMENT 'Hoa hồng thực trả' AFTER `commission_balance`;

ALTER TABLE `v2_server_v2ray`
    CHANGE `port` `port` char(11) NOT NULL AFTER `host`;

CREATE TABLE `v2_stat_user` (
                                `id` int(11) NOT NULL AUTO_INCREMENT,
                                `user_id` int(11) NOT NULL,
                                `server_id` int(11) NOT NULL,
                                `server_type` char(11) NOT NULL,
                                `server_rate` decimal(10,2) NOT NULL,
                                `u` bigint(20) NOT NULL,
                                `d` bigint(20) NOT NULL,
                                `record_type` char(2) NOT NULL,
                                `record_at` int(11) NOT NULL,
                                `created_at` int(11) NOT NULL,
                                `updated_at` int(11) NOT NULL,
                                PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


ALTER TABLE `v2_payment`
    ADD `notify_domain` varchar(128) COLLATE 'utf8mb4_general_ci' NULL AFTER `config`;

ALTER TABLE `v2_stat_user`
    ADD INDEX `server_id` (`server_id`),
ADD INDEX `user_id` (`user_id`),
ADD INDEX `record_at` (`record_at`);

ALTER TABLE `v2_stat_server`
    CHANGE `u` `u` bigint NOT NULL AFTER `server_type`,
    CHANGE `d` `d` bigint NOT NULL AFTER `u`;

ALTER TABLE `v2_payment`
    ADD `handling_fee_fixed` int(11) NULL AFTER `notify_domain`,
ADD `handling_fee_percent` decimal(5,2) NULL AFTER `handling_fee_fixed`;

ALTER TABLE `v2_order`
    ADD `handling_amount` int(11) NULL AFTER `total_amount`;

DELIMITER $$

DROP PROCEDURE IF EXISTS `path-2022-03-29` $$
CREATE PROCEDURE `path-2022-03-29`()
BEGIN

    DECLARE IndexIsThere INTEGER;

SELECT COUNT(1) INTO IndexIsThere
FROM INFORMATION_SCHEMA.STATISTICS
WHERE table_name   = 'v2_stat_user'
  AND   index_name   = 'server_id';

IF IndexIsThere != 0 THEN
         TRUNCATE TABLE `v2_stat_user`;
END IF;

END $$

DELIMITER ;
CALL `path-2022-03-29`();
DROP PROCEDURE IF EXISTS `path-2022-03-29`;

ALTER TABLE `v2_stat_user`
    ADD UNIQUE `server_rate_user_id_record_at` (`server_rate`, `user_id`, `record_at`);
ALTER TABLE `v2_stat_user`
    ADD INDEX `server_rate` (`server_rate`);
ALTER TABLE `v2_stat_user`
DROP INDEX `server_id_user_id_record_at`;
ALTER TABLE `v2_stat_user`
DROP INDEX `server_id`;

ALTER TABLE `v2_stat_user`
DROP `server_id`;
ALTER TABLE `v2_stat_user`
DROP `server_type`;

ALTER TABLE `v2_notice`
    ADD `tags` varchar(255) COLLATE 'utf8_general_ci' NULL AFTER `img_url`;

ALTER TABLE `v2_ticket`
ADD `reply_status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '0: chờ phản hồi 1: đã phản hồi' AFTER `status`;

ALTER TABLE `v2_server_v2ray`
DROP `settings`;

ALTER TABLE `v2_ticket`
DROP `last_reply_user_id`;

ALTER TABLE `v2_server_shadowsocks`
    ADD `obfs` char(11) NULL AFTER `cipher`,
ADD `obfs_settings` varchar(255) NULL AFTER `obfs`;

ALTER TABLE `v2_plan`
    CHANGE `name` `name` varchar(255) COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `transfer_enable`,
    CHANGE `content` `content` text COLLATE 'utf8mb4_general_ci' NULL AFTER `renew`;

ALTER TABLE `v2_mail_log`
    COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_mail_log`
    CHANGE `email` `email` varchar(64) NOT NULL AFTER `id`,
    CHANGE `subject` `subject` varchar(255) NOT NULL AFTER `email`,
    CHANGE `template_name` `template_name` varchar(255) NOT NULL AFTER `subject`,
    CHANGE `error` `error` text NULL AFTER `template_name`;

ALTER TABLE `v2_user`
    ADD `speed_limit` int(11) NULL AFTER `plan_id`;

ALTER TABLE `v2_plan`
    ADD `speed_limit` int(11) NULL AFTER `transfer_enable`;
ALTER TABLE `v2_server_v2ray`
    CHANGE `port` `port` varchar(11) COLLATE 'utf8_general_ci' NOT NULL AFTER `host`;
ALTER TABLE `v2_server_shadowsocks`
    CHANGE `port` `port` varchar(11) NOT NULL AFTER `host`;
ALTER TABLE `v2_server_trojan`
    CHANGE `port` `port` varchar(11) NOT NULL COMMENT 'Cổng kết nối' AFTER `host`;

ALTER TABLE `v2_server_shadowsocks`
    ADD `route_id` varchar(255) COLLATE 'utf8mb4_general_ci' NULL AFTER `group_id`;

ALTER TABLE `v2_server_trojan`
    ADD `route_id` varchar(255) COLLATE 'utf8mb4_general_ci' NULL AFTER `group_id`;

ALTER TABLE `v2_server_v2ray`
    COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_server_v2ray`
    CHANGE `group_id` `group_id` varchar(255) NOT NULL AFTER `id`,
    CHANGE `route_id` `route_id` varchar(255) NULL AFTER `group_id`,
    CHANGE `host` `host` varchar(255) NOT NULL AFTER `parent_id`,
    CHANGE `port` `port` varchar(11) NOT NULL AFTER `host`,
    CHANGE `tags` `tags` varchar(255) NULL AFTER `tls`,
    CHANGE `rate` `rate` varchar(11) NOT NULL AFTER `tags`,
    CHANGE `network` `network` text NOT NULL AFTER `rate`,
    CHANGE `rules` `rules` text NULL AFTER `network`,
    CHANGE `networkSettings` `networkSettings` text NULL AFTER `rules`,
    CHANGE `tlsSettings` `tlsSettings` text NULL AFTER `networkSettings`,
    CHANGE `ruleSettings` `ruleSettings` text NULL AFTER `tlsSettings`,
    CHANGE `dnsSettings` `dnsSettings` text NULL AFTER `ruleSettings`;

ALTER TABLE `v2_server_v2ray`
    ADD `route_id` varchar(255) COLLATE 'utf8mb4_general_ci' NULL AFTER `group_id`;


CREATE TABLE `v2_server_route` (
                                   `id` int(11) NOT NULL AUTO_INCREMENT,
                                   `remarks` varchar(255) NOT NULL,
                                   `match` varchar(255) NOT NULL,
                                   `action` varchar(11) NOT NULL,
                                   `action_value` varchar(255) DEFAULT NULL,
                                   `created_at` int(11) NOT NULL,
                                   `updated_at` int(11) NOT NULL,
                                   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `v2_server_route`
    CHANGE `match` `match` text COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `remarks`;

ALTER TABLE `v2_order`
    ADD UNIQUE `trade_no` (`trade_no`);

ALTER TABLE `v2_plan`
    CHANGE `content` `content` text COLLATE 'utf8mb4_general_ci' NULL AFTER `renew`;

ALTER TABLE `v2_plan`
    COLLATE 'utf8mb4_general_ci';

ALTER TABLE `v2_server_v2ray`
    RENAME TO `v2_server_vmess`;

ALTER TABLE `v2_server_vmess`
    CHANGE `network` `network` varchar(11) COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `rate`;

CREATE TABLE `v2_server_hysteria` (
                                      `id` int(11) NOT NULL AUTO_INCREMENT,
                                      `group_id` varchar(255) NOT NULL,
                                      `route_id` varchar(255) DEFAULT NULL,
                                      `name` varchar(255) NOT NULL,
                                      `parent_id` int(11) DEFAULT NULL,
                                      `host` varchar(255) NOT NULL,
                                      `port` varchar(11) NOT NULL,
                                      `server_port` int(11) NOT NULL,
                                      `tags` varchar(255) DEFAULT NULL,
                                      `rate` varchar(11) NOT NULL,
                                      `show` tinyint(1) NOT NULL DEFAULT '0',
                                      `sort` int(11) DEFAULT NULL,
                                      `up_mbps` int(11) NOT NULL,
                                      `down_mbps` int(11) NOT NULL,
                                      `server_name` varchar(64) DEFAULT NULL,
                                      `insecure` tinyint(1) NOT NULL DEFAULT '0',
                                      `created_at` int(11) NOT NULL,
                                      `updated_at` int(11) NOT NULL,
                                      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `v2_plan`
    ADD `capacity_limit` int(11) NULL AFTER `reset_traffic_method`;

ALTER TABLE `v2_stat_order`
    CHANGE `record_at` `record_at` int(11) NOT NULL AFTER `id`,
    CHANGE `record_type` `record_type` char(1) COLLATE 'utf8_general_ci' NOT NULL AFTER `record_at`,
    CHANGE `order_count` `paid_count` int(11) NOT NULL COMMENT 'Số lượng đơn hàng' AFTER `record_type`,
    CHANGE `order_amount` `paid_total` int(11) NOT NULL COMMENT 'Tổng đơn hàng' AFTER `paid_count`,
    CHANGE `commission_count` `commission_count` int(11) NOT NULL AFTER `paid_total`,
    CHANGE `commission_amount` `commission_total` int(11) NOT NULL COMMENT 'Tổng hoa hồng' AFTER `commission_count`,
    ADD `order_count` int(11) NOT NULL AFTER `record_type`,
    ADD `order_total` int(11) NOT NULL AFTER `order_count`,
    ADD `register_count` int(11) NOT NULL AFTER `order_total`,
    ADD `invite_count` int(11) NOT NULL AFTER `register_count`,
    ADD `transfer_used_total` varchar(32) NOT NULL AFTER `invite_count`,
    RENAME TO `v2_stat`;

CREATE TABLE `v2_log` (
                          `id` int(11) NOT NULL AUTO_INCREMENT,
                          `title` varchar(255) NOT NULL,
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

ALTER TABLE `v2_log`
    CHANGE `title` `title` text COLLATE 'utf8mb4_general_ci' NOT NULL AFTER `id`;

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
                                   `flow` varchar(11) DEFAULT NULL,
                                   `network` varchar(11) NOT NULL,
                                   `network_settings` text,
                                   `tags` text,
                                   `rate` varchar(11) NOT NULL,
                                   `show` tinyint(1) NOT NULL DEFAULT '0',
                                   `sort` int(11) DEFAULT NULL,
                                   `created_at` int(11) NOT NULL,
                                   `updated_at` int(11) NOT NULL,
                                   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `v2_server_vless`
    CHANGE `flow` `flow` varchar(64) COLLATE 'utf8mb4_general_ci' NULL AFTER `tls_settings`;

ALTER TABLE `v2_server_hysteria`
    ADD `version` int(11) NOT NULL AFTER `id`;

ALTER TABLE `v2_server_hysteria`
    ADD `obfs` varchar(64) NULL AFTER `down_mbps`,
    ADD `obfs_password` varchar(255) NULL AFTER `obfs`;

UPDATE `v2_server_vless`
    SET tls_settings = REPLACE(tls_settings, 'shortId', 'short_id');

ALTER TABLE `v2_plan`
    ADD `device_limit` int(11) NULL AFTER `transfer_enable`;

ALTER TABLE `v2_user`
    ADD `device_limit` int(11) NULL AFTER `transfer_enable`;

CREATE TABLE IF NOT EXISTS `v2_user_device` (
                              `id` int(11) NOT NULL AUTO_INCREMENT,
                              `user_id` int(11) NOT NULL,
                              `hwid_hash` char(64) DEFAULT NULL,
                              `hwid` varchar(255) DEFAULT NULL,
                              `user_agent` varchar(255) DEFAULT NULL,
                              `first_ip` varchar(128) DEFAULT NULL,
                              `last_ip` varchar(128) DEFAULT NULL,
                              `first_seen_at` int(11) DEFAULT NULL,
                              `last_seen_at` int(11) DEFAULT NULL,
                              `created_at` int(11) NOT NULL,
                              `updated_at` int(11) NOT NULL,
                              PRIMARY KEY (`id`),
                              UNIQUE KEY `v2_user_device_user_hwid_unique` (`user_id`,`hwid_hash`),
                              KEY `v2_user_device_user_id_index` (`user_id`),
                              KEY `v2_user_device_last_seen_index` (`last_seen_at`),
                              CONSTRAINT `v2_user_device_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `v2_user_device`
    ADD `uuid` char(36) NULL AFTER `user_id`,
    ADD `status` varchar(16) NOT NULL DEFAULT 'bound' AFTER `hwid`,
    MODIFY `hwid_hash` char(64) NULL,
    MODIFY `hwid` varchar(255) NULL,
    MODIFY `first_seen_at` int(11) NULL,
    MODIFY `last_seen_at` int(11) NULL;

UPDATE `v2_user_device`
    SET `uuid` = UUID()
    WHERE `uuid` IS NULL OR `uuid` = '';

ALTER TABLE `v2_user_device`
    MODIFY `uuid` char(36) NOT NULL,
    ADD UNIQUE KEY `v2_user_device_uuid_unique` (`uuid`),
    ADD KEY `v2_user_device_status_index` (`status`);

ALTER TABLE `v2_server_trojan`
    ADD `network` varchar(11) NULL AFTER `server_port`,
    ADD `network_settings` text AFTER `network`;

ALTER TABLE `v2_server_hysteria`
    MODIFY COLUMN `port` VARCHAR(255) NOT NULL;

CREATE TABLE `v2_giftcard` (
                             `id` int(11) NOT NULL AUTO_INCREMENT,
                             `code` varchar(255) NOT NULL,
                             `name` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
                             `type` tinyint(1) NOT NULL,
                             `value` int(11) DEFAULT NULL,
                             `limit_use` int(11) DEFAULT NULL,
                             `used_user_ids` varchar(255) DEFAULT NULL,
                             `started_at` int(11) NOT NULL,
                             `ended_at` int(11) NOT NULL,
                             `created_at` int(11) NOT NULL,
                             `updated_at` int(11) NOT NULL,
                             PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `v2_giftcard`
    ADD `plan_id` int(11) NULL AFTER `value`,
    CHANGE `used_user_ids` `used_user_ids` varchar(16384) NULL AFTER `limit_use`;

ALTER TABLE `v2_user`
ADD `auto_renewal` tinyint(4) NOT NULL DEFAULT '0' AFTER `speed_limit`;

ALTER TABLE `v2_ticket`
CHANGE `reply_status` `reply_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0: chờ phản hồi 1: đã phản hồi' AFTER `status`;

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
                                      `rate` varchar(11) NOT NULL,
                                      `show` tinyint(1) NOT NULL DEFAULT '0',
                                      `sort` int(11) DEFAULT NULL,
                                      `server_name` varchar(64) DEFAULT NULL,
                                      `insecure` tinyint(1) NOT NULL DEFAULT '0',
                                      `disable_sni` tinyint(1) NOT NULL DEFAULT '0',
                                      `udp_relay_mode` varchar(64) DEFAULT NULL,
                                      `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0',
                                      `congestion_control` varchar(64) DEFAULT NULL,
                                      `created_at` int(11) NOT NULL,
                                      `updated_at` int(11) NOT NULL,
                                      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
                                      `rate` varchar(11) NOT NULL,
                                      `show` tinyint(1) NOT NULL DEFAULT '0',
                                      `sort` int(11) DEFAULT NULL,
                                      `server_name` varchar(64) DEFAULT NULL,
                                      `insecure` tinyint(1) NOT NULL DEFAULT '0',
                                      `padding_scheme` text,
                                      `created_at` int(11) NOT NULL,
                                      `updated_at` int(11) NOT NULL,
                                      PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `v2_user`
ADD UNIQUE `token` (`token`);

ALTER TABLE `v2_order` 
ADD INDEX idx_user (`user_id`),
ADD INDEX idx_user_status (`user_id`, `status`);

ALTER TABLE `v2_server_vless`
ADD `encryption` varchar(64) COLLATE 'utf8mb4_general_ci' NULL AFTER `network_settings`,
ADD `encryption_settings` text COLLATE 'utf8mb4_general_ci' NULL AFTER `encryption`;

CREATE TABLE IF NOT EXISTS `v2_server_zicnode` (
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
                                    `rate` varchar(11) NOT NULL,
                                    `show` tinyint(1) NOT NULL DEFAULT '0',
                                    `sort` int(11) DEFAULT NULL,
                                    `protocol` varchar(24) NOT NULL COMMENT 'Loại giao thức',
                                    `tls` tinyint(1) NOT NULL COMMENT 'Loại TLS',
                                    `tls_settings` text COMMENT 'Cấu hình TLS',
                                    `flow` varchar(64) DEFAULT NULL COMMENT 'Flow control VLESS',
                                    `network` varchar(11) NOT NULL COMMENT 'Kiểu truyền tải',
                                    `network_settings` text COMMENT 'Cấu hình truyền tải',
                                    `encryption` varchar(64) DEFAULT NULL COMMENT 'Mã hóa VLESS',
                                    `encryption_settings` text COMMENT 'Cấu hình mã hóa VLESS',
                                    `disable_sni` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'TUIC tắt SNI',
                                    `udp_relay_mode` varchar(64) DEFAULT NULL COMMENT 'Chế độ relay UDP TUIC',
                                    `zero_rtt_handshake` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Bắt tay TUIC 0-RTT',
                                    `congestion_control` varchar(64) DEFAULT NULL COMMENT 'Kiểm soát tắc nghẽn TUIC',
                                    `cipher` varchar(64) DEFAULT NULL COMMENT 'Kiểu mã hóa Shadowsocks',
                                    `up_mbps` int(11) NOT NULL COMMENT 'Băng thông tải lên Hysteria',
                                    `down_mbps` int(11) NOT NULL COMMENT 'Băng thông tải xuống Hysteria',
                                    `obfs` varchar(64) DEFAULT NULL COMMENT 'Mật khẩu obfs Hysteria1 / kiểu obfs Hysteria2',
                                    `obfs_password` varchar(255) DEFAULT NULL COMMENT 'Mật khẩu obfs Hysteria2',
                                    `padding_scheme` text COMMENT 'Cấu hình padding AnyTLS',
                                    `created_at` int(11) NOT NULL,
                                    `updated_at` int(11) NOT NULL,
                                    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO `v2_server_zicnode`
SELECT * FROM `v2_server_v2node`;

ALTER TABLE `v2_server_route`
CHANGE `action_value` `action_value` text NULL AFTER `action`;

CREATE TABLE IF NOT EXISTS `v2_user_subscription` (
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
                                        CONSTRAINT `v2_user_subscription_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `v2_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `v2_user_subscription`
ADD KEY `v2_user_subscription_user_id_index` (`user_id`);

ALTER TABLE `v2_user_device`
ADD KEY `v2_user_device_user_id_index` (`user_id`);

INSERT IGNORE INTO `v2_user_subscription` (
    `user_id`, `plan_id`, `group_id`, `speed_limit`, `device_limit`, `t`, `u`, `d`,
    `transfer_enable`, `expired_at`, `auto_renewal`, `remind_expire`, `remind_traffic`,
    `token`, `uuid`, `status`, `remarks`, `created_at`, `updated_at`
)
SELECT
    users.`id`, users.`plan_id`, users.`group_id`, users.`speed_limit`, users.`device_limit`, users.`t`, users.`u`, users.`d`,
    users.`transfer_enable`, users.`expired_at`, COALESCE(users.`auto_renewal`, 0), COALESCE(users.`remind_expire`, 1), COALESCE(users.`remind_traffic`, 1),
    users.`token`, users.`uuid`, 'active', 'Migrated from legacy user subscription fields',
    users.`created_at`, users.`updated_at`
FROM `v2_user` AS users
LEFT JOIN `v2_user_subscription` AS existing_subscriptions
    ON existing_subscriptions.user_id = users.`id`
WHERE (
    users.`plan_id` IS NOT NULL
    OR users.`transfer_enable` > 0
    OR EXISTS (
        SELECT 1 FROM `v2_user_device` AS devices WHERE devices.user_id = users.`id`
    )
)
    AND existing_subscriptions.id IS NULL;

ALTER TABLE `v2_order`
ADD `subscription_id` int(11) NULL AFTER `user_id`,
ADD INDEX `idx_subscription` (`subscription_id`);

UPDATE `v2_order` AS orders
LEFT JOIN (
    SELECT user_id, MIN(id) AS id
    FROM `v2_user_subscription`
    GROUP BY user_id
) AS subscriptions ON subscriptions.user_id = orders.user_id
SET orders.subscription_id = subscriptions.id
WHERE orders.plan_id > 0;

ALTER TABLE `v2_user_device`
ADD `subscription_id` int(11) NULL AFTER `user_id`,
ADD KEY `v2_user_device_subscription_id_index` (`subscription_id`);

UPDATE `v2_user_device` AS devices
INNER JOIN (
    SELECT user_id, MIN(id) AS id
    FROM `v2_user_subscription`
    GROUP BY user_id
) AS subscriptions ON subscriptions.user_id = devices.user_id
SET devices.subscription_id = subscriptions.id
WHERE devices.subscription_id IS NULL;

ALTER TABLE `v2_user_device`
MODIFY `subscription_id` int(11) NOT NULL,
DROP INDEX `v2_user_device_user_hwid_unique`,
ADD UNIQUE KEY `v2_user_device_subscription_hwid_unique` (`subscription_id`,`hwid_hash`),
ADD CONSTRAINT `v2_user_device_subscription_id_foreign` FOREIGN KEY (`subscription_id`) REFERENCES `v2_user_subscription` (`id`) ON DELETE CASCADE;

ALTER TABLE `v2_user_device`
MODIFY `hwid_hash` char(64) DEFAULT NULL,
MODIFY `hwid` varchar(255) DEFAULT NULL,
MODIFY `user_agent` varchar(255) DEFAULT NULL,
MODIFY `first_ip` varchar(128) DEFAULT NULL,
MODIFY `last_ip` varchar(128) DEFAULT NULL,
MODIFY `first_seen_at` int(11) DEFAULT NULL,
MODIFY `last_seen_at` int(11) DEFAULT NULL;

ALTER TABLE `v2_stat_user`
ADD `subscription_id` int(11) NULL AFTER `user_id`,
DROP INDEX `server_rate_user_id_record_at`,
ADD UNIQUE KEY `server_rate_subscription_id_record_at` (`server_rate`,`subscription_id`,`record_at`),
ADD KEY `subscription_id` (`subscription_id`);

CREATE TABLE IF NOT EXISTS `v2_staff` (
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

ALTER TABLE `v2_staff`
ADD `plan_id` JSON DEFAULT NULL AFTER `domain`;

ALTER TABLE `v2_staff`
MODIFY `custom_html` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL;

ALTER TABLE `v2_user_subscription`
ADD `name_sni` varchar(255) DEFAULT NULL AFTER `last_order_id`,
ADD `network_settings` varchar(255) DEFAULT NULL AFTER `name_sni`;

ALTER TABLE `v2_user_subscription`
ADD `user_note` varchar(255) DEFAULT NULL AFTER `remarks`;

CREATE TABLE IF NOT EXISTS `v2_happ_subscribe_cache` (
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
