---
title: "哨兵-3 OLCI 全分辨率辐亮度"
date: 2026-11-03 12:00:00
permalink: /pages/e7ebe842/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "copernicus"
  - "esa"
  - "eu"
  - "olci"
  - "radiance"
  - "satellite-imagery"
  - "sentinel"
  - "toa"
---

# 哨兵-3 OLCI 全分辨率辐亮度

英文原名：Sentinel-3 OLCI EFR: Ocean and Land Color Instrument Earth Observation Full Resolution

## 这是什么数据

海洋与陆地水色仪（OLCI）的对地观测全分辨率（EFR）数据集包含 21 个光谱波段的大气顶辐亮度，中心波长在 0.4 微米到 1.02 微米之间，空间分辨率 300 米，约每 2 天全球覆盖一次。

OLCI 是 ESA/EUMETSAT 哨兵-3 任务的仪器之一，用于高精度、高可靠地测量海面地形、海面与陆面温度、海洋水色和陆地水色，支撑海洋预报系统以及环境与气候监测。

哨兵-3 的 OLCI 仪器基于 ENVISAT 卫星 MERIS 的光机与成像设计，目的是反演海面正上方上行辐亮度（离水辐亮度）的光谱分布。OLCI 在可见光到近红外（400–1029 纳米）的 21 个光谱波段同时观测。

## 覆盖范围与时间

- 覆盖范围：全球，约每 2 天覆盖一次
- 时间范围：2016-10-18 至 2026-11-02

## 分辨率与规格

- 空间分辨率：约 300 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Oa01_radiance | 气溶胶订正、改进水体成分反演 | 300 | 400nm/15nm |
| Oa02_radiance | 黄色物质与碎屑色素（浑浊度） | 300 | 412.5nm/10nm |
| Oa03_radiance | 叶绿素吸收峰、生物地球化学、植被 | 300 | 442.5nm/10nm |
| Oa04_radiance | 高叶绿素、其他色素 | 300 | 490nm/10nm |
| Oa05_radiance | 叶绿素、沉积物、浑浊度、赤潮 | 300 | 510nm/10nm |
| Oa06_radiance | 叶绿素参考（叶绿素最小值） | 300 | 560nm/10nm |
| Oa07_radiance | 沉积物负荷 | 300 | 620nm/10nm |
| Oa08_radiance | 叶绿素（第二吸收峰）、沉积物、黄色物质/植被 | 300 | 665nm/10nm |
| Oa09_radiance | 改进荧光反演，并与 665 和 680 纳米波段配合更好地考虑[光谱微笑效应](https://sentinels.copernicus.eu/web/sentinel/technical-guides/sentinel-3-olci/level-2/smile-correction) | 300 | 673.75nm/7.5nm |
| Oa10_radiance | 叶绿素荧光峰、红边 | 300 | 681.25nm/7.5nm |
| Oa11_radiance | 叶绿素荧光基线、红边过渡 | 300 | 708.75nm/10nm |
| Oa12_radiance | 氧气吸收/云、植被 | 300 | 753.75nm/7.5nm |
| Oa13_radiance | 氧气吸收波段/气溶胶订正 | 300 | 761.25nm/7.5nm |
| Oa14_radiance | 大气订正 | 300 | 764.375nm/3.75nm |
| Oa15_radiance | O2A 用于云顶气压、陆地荧光 | 300 | 767.5nm/2.5nm |
| Oa16_radiance | 大气订正/气溶胶订正 | 300 | 778.75nm/15nm |
| Oa17_radiance | 大气订正/气溶胶订正、云、像元配准 | 300 | 865nm/20nm |
| Oa18_radiance | 水汽吸收参考波段（与 SLSTR 仪器的共同参考波段）；植被监测 | 300 | 885nm/10nm |
| Oa19_radiance | 水汽吸收/植被监测（最大反射率） | 300 | 900nm/10nm |
| Oa20_radiance | 水汽吸收、大气/气溶胶订正 | 300 | 940nm/20nm |
| Oa21_radiance | 大气/气溶胶订正 | 300 | 1029nm/40nm |
| quality_flags | 质量标志 | 300 |  |

## 能拿来做什么

- 300 米分辨率的海洋与陆地水色分析
- 海洋水色产品所需的离水辐亮度反演
- 环境与气候监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S3/OLCI');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S3/OLCI`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S3_OLCI

## 许可与引用

- 许可：proprietary
- 关键词：copernicus, esa, eu, olci, radiance, satellite-imagery, sentinel, toa
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [全球海洋水色光学产品（多源，4 公里，月度）](/pages/b4a5e847/)
- [全球海洋水色初级生产产品（多源，4 公里）](/pages/6396836c/)
- [全球海洋水色反射率产品（OLCI，300 米）](/pages/f4ffb7b4/)
- [全球海洋水色反射率产品（多源，4 公里）](/pages/472dc170/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
