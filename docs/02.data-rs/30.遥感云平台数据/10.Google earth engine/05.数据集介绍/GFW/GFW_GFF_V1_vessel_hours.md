---
title: "GFW（全球渔业观察）每日船舶小时数"
date: 2026-11-03 12:00:00
permalink: /pages/37ea4824/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "fishing"
  - "gfw"
  - "monthly"
  - "oceans"
---

# GFW（全球渔业观察）每日船舶小时数

英文原名：GFW (Global Fishing Watch) Daily Vessel Hours

## 这是什么数据

渔船存在，以每平方公里的小时数衡量。每个资产是给定船旗国和某一天的船舶存在，每种渔具类型对应一个波段。

见 [Earth Engine 示例脚本](https://globalfishingwatch.org/research/global-footprint-of-fisheries/)。另见 [GFW 主站](https://GlobalFishingWatch.org) 了解项目信息、完全交互的可视化地图和影响。

## 覆盖范围与时间

- 覆盖范围：全球海洋
- 时间范围：2012-01-01 至 2017-01-01

## 分辨率与规格

- 空间分辨率：约 1,113.2 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| drifting_longlines | 使用漂流延绳钓的渔船存在小时数（每平方公里）。 | 1113.2 |  |
| fixed_gear | 使用固定渔具的渔船存在小时数（每平方公里）。 | 1113.2 |  |
| other_fishing | 使用其他渔具类型的渔船存在小时数（每平方公里）。 | 1113.2 |  |
| purse_seines | 使用围网的渔船存在小时数（每平方公里）。 | 1113.2 |  |
| squid_jigger | 使用鱿鱼钓机的渔船存在小时数（每平方公里）。 | 1113.2 |  |
| trawlers | 使用拖网的渔船存在小时数（每平方公里）。 | 1113.2 |  |

## 能拿来做什么

- 全球捕捞努力量制图
- 非法捕捞监测
- 海洋保护区执法支持

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('GFW/GFF/V1/vessel_hours');
```

- 数据集编号（Earth Engine ID）：`GFW/GFF/V1/vessel_hours`
- 提供方：Global Fishing Watch、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GFW_GFF_V1_vessel_hours

## 许可与引用

- 许可：CC-BY-SA-4.0
- 关键词：fishing, gfw, monthly, oceans
- 数据引用：Global Fishing Watch, "Tracking the Global Footprint of Fisheries." Science 361.6378 (2018).

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GFW (Global Fishing Watch) Daily Fishing Hours](/pages/7dfa6e21/)
- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
