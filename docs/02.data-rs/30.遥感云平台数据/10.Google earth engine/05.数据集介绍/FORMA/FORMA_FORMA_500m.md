---
title: "FORMA 全球森林观察毁林警报，500 米（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/19a66aef/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "alerts"
  - "deforestation"
  - "fire"
  - "forest"
  - "forma"
  - "geophysical"
  - "gfw"
  - "modis"
  - "nasa"
  - "wri"
---

# FORMA 全球森林观察毁林警报，500 米（已弃用）

英文原名：FORMA Global Forest Watch Deforestation Alerts, 500m [deprecated]

## 这是什么数据

FORMA 是基于 MODIS 的热带湿润森林毁林警报系统。FORMA 旨在快速识别树冠覆盖损失的新区域。该系统分析 MODIS 传感器每日采集的数据，MODIS 运行于 NASA 的 Terra 和 Aqua 卫星上。FORMA 警报系统随后探测植被覆盖随时间的显著变化，以归一化植被指数（NDVI，衡量植被绿度）度量。这类植被覆盖的显著变化很可能表明森林被砍伐、烧毁或落叶。当探测到变化时，系统通过将像元值设为探测到变化的日期来向数据集添加一条警报。FORMA 警报只出现在树冠覆盖损失概率大于或等于 50% 的区域。FORMA 数据的空间分辨率为 500 米，更新间隔为半月。FORMA 警报始于 2006 年 1 月。

## 覆盖范围与时间

- 覆盖范围：全球热带湿润森林
- 时间范围：2006-01-01 至 2015-06-10

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像（Image），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| constant | [自 1970 年 1 月 1 日起的秒数](https://en.wikipedia.org/wiki/Unix_time) | 500 |  |

## 能拿来做什么

- 热带森林毁林近实时警报
- 森林砍伐热点识别
- REDD+ 监测与报告

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.Image('FORMA/FORMA_500m');
```

- 数据集编号（Earth Engine ID）：`FORMA/FORMA_500m`
- 提供方：Global Forest Watch, World Resources Institute、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FORMA_FORMA_500m

## 许可与引用

- 许可：proprietary
- 关键词：alerts, deforestation, fire, forest, forma, geophysical, gfw, modis, nasa, wri
- 数据引用：Hammer, Dan, Robin Kraft, and David Wheeler. 2013. FORMA Alerts. World
Resources Institute and Center for Global Development.
[www.globalforestwatch.org](www.globalforestwatch.org).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [FIRMS: Fire Information for Resource Management System](/pages/4ae50fa9/)
- [FORMA Alert Thresholds](/pages/299d3b97/)
- [FORMA Alerts](/pages/d92138fe/)
- [FORMA Raw Output FIRMS](/pages/721e383c/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
