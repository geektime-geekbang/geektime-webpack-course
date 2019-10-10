CREATE DATABASE `shopping` /*!40100 DEFAULT CHARACTER SET utf8 */;


-- User base information table
CREATE TABLE `t_goods` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL COMMENT 'Article title',
  `description` varchar(400) NOT NULL COMMENT 'Article description',
  `content` text NOT NULL  COMMENT 'Article content',
  `thumbnail` varchar(400) COMMENT 'Article image',
  `cid` bigint(20) unsigned NOT NULL COMMENT 'Category id',
  `uid` bigint(20) unsigned NOT NULL  COMMENT 'User id',
  `like_count` bigint(20) unsigned NOT NULL DEFAULT 0  COMMENT 'Like count',
  `comment_count` bigint(20) unsigned NOT NULL DEFAULT 0  COMMENT 'comment count',  
  `visit_count` bigint(20) unsigned NOT NULL DEFAULT 0 COMMENT 'Visit count',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='Article table';

CREATE TABLE `t_categories` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT 'Category name',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='Article category table';

CREATE TABLE `t_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL COMMENT 'Username',
  `password` varchar(100) NOT NULL COMMENT 'Password',
  `email` varchar(400) NOT NULL COMMENT 'Email address',
  `avatar` varchar(400) NOT NULL COMMENT 'User avatar',
  `name` varchar(50) DEFAULT NULL  COMMENT 'name',
  `home_page` varchar(50) DEFAULT NULL COMMENT 'home_page',
  `brief_introduction` varchar(50) DEFAULT NULL COMMENT 'brief_introduction',
  `type` tinyint(1) unsigned COMMENT 'User type, 0 means super adminstrator,1 means generar adminstrator, 2 means user',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='User table';

CREATE TABLE `t_comments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `gid` bigint(20) unsigned NOT NULL COMMENT 'Goods id',
  `uid` bigint(20) unsigned NOT NULL COMMENT 'User id',
  `content` text NOT NULL  COMMENT 'Comment content',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='Comment table';

CREATE TABLE `t_orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uid` bigint(20) unsigned NOT NULL COMMENT 'User id',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='Order table';


CREATE TABLE `t_order_goods` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `oid` bigint(20) unsigned NOT NULL COMMENT 'Order id',
  `gid` bigint(20) unsigned NOT NULL COMMENT 'Goods id',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='Comment table';

CREATE TABLE `t_activities` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL COMMENT 'activity title',
  `content` text NOT NULL  COMMENT 'activity content',
  `time` datetime NOT NULL COMMENT 'activity time',
  `banner_url` varchar(400) NOT NULL COMMENT 'activity headUrl',
  `head_url` varchar(400) NOT NULL COMMENT 'activity headBigUrl',
  `jump_url` varchar(400) NOT NULL COMMENT 'activity jumpUrl',
  `is_now` int(1) NOT NULL COMMENT 'activity isNow',
  `show_banner` int(1) NOT NULL COMMENT 'activity showBanner',
  `create_date` datetime NOT NULL COMMENT 'Create time',
  `update_date` datetime COMMENT 'Update time',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=100000 DEFAULT CHARSET=utf8 COMMENT='Activities table';
