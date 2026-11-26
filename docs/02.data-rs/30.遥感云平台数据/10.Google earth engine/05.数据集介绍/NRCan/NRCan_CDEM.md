---
title: "加拿大数字高程模型"
date: 2026-11-03 12:00:00
permalink: /pages/34572cde/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "canada"
  - "cdem"
  - "dem"
  - "elevation"
  - "elevation-topography"
  - "geophysical"
  - "nrcan"
  - "topography"
---

# 加拿大数字高程模型

英文原名：Canadian Digital Elevation Model

## 这是什么数据

加拿大数字高程模型（CDEM）是加拿大自然资源部（NRCan）高程系统的一部分，源自既有的加拿大数字高程数据（CDED）。在这些数据中，高程可以是地面高程或反射面高程。

CDEM 由多个不同分辨率的 DEM 组成。分辨率随纬度变化，基础分辨率为 0.75 弧秒。更多信息见 [产品规格](https://ftp.geogratis.gc.ca/pub/nrcan_rncan/elevation/cdem_mnec/doc/CDEM_product_specs.pdf)。

包含根据 [加拿大开放政府许可](https://open.canada.ca/en/open-government-licence-canada) 授权的信息。

## 覆盖范围与时间

- 覆盖范围：空间：加拿大；时间：1945 年至 2011 年；分辨率：23.19 米（基础 0.75 弧秒，随纬度变化）。
- 时间范围：1945-01-01 至 2011-01-01

## 分辨率与规格

- 空间分辨率：约 23.19 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| elevation | 高程 | 23.19 |  |

## 能拿来做什么

- 做加拿大区域地形分析、水文建模与工程制图。
- 与其他 DEM 拼接构建北美高程产品。
- 作为遥感影像正射校正的高程参考。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NRCan/CDEM');
```

- 数据集编号（Earth Engine ID）：`NRCan/CDEM`
- 提供方：NRCan、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NRCan_CDEM

## 许可与引用

- 许可：OGL-Canada-2.0
- 关键词：canada, cdem, dem, elevation, elevation-topography, geophysical, nrcan, topography
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ALOS 全球 30 米 DSM v4.1](/pages/774620fb/)
- [ASTER传感器(TERRA)](/pages/da7fa1/)
- [CryoSat-2 南极 1 公里高程模型](/pages/a0390601/)
- [GHSL：全球建筑体积 1975–2030（P2023A）](/pages/a37f30e2/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
