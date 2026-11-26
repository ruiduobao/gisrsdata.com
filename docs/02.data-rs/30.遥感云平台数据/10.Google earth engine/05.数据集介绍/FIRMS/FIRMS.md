---
title: "FIRMS：资源管理火灾信息系统"
date: 2026-11-03 12:00:00
permalink: /pages/4ae50fa9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "eosdis"
  - "fire"
  - "firms"
  - "geophysical"
  - "hotspot"
  - "lance"
  - "modis"
  - "nasa"
  - "thermal"
---

# FIRMS：资源管理火灾信息系统

英文原名：FIRMS: Fire Information for Resource Management System

## 这是什么数据

资源管理火灾信息系统（FIRMS）数据集的 Earth Engine 版本以栅格化形式包含 LANCE 火灾探测产品。近实时（NRT）活跃火点由 LANCE 使用标准 MODIS MOD14/MYD14 火灾与热异常产品处理得到。每个活跃火点表示一个 1 公里像元的中心点，该像元被算法标记为含有一个或多个火点。数据栅格化方式如下：对每个 FIRMS 活跃火点，定义一个 1 公里边界框（BB）；识别与 FIRMS BB 相交的 MODIS 正弦投影像元；若多个 FIRMS BB 与同一像元相交，保留置信度较高的一个；若置信度相同，保留较亮的一个。

近实时数据集中的数据不被视为科学质量的数据。

更多信息见[此处](https://firms.modaps.eosdis.nasa.gov/)。

注意：来自 NOAA20 和 SUOMI 的 VIIRS FIRMS 数据集也可获取：

## 覆盖范围与时间

- 覆盖范围：全球
- 时间范围：2000-11-01 至 2026-11-01

## 分辨率与规格

- 空间分辨率：约 1,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| T21 | 使用 MODIS 21/22 通道得到的火点像元亮度温度。 | 1000 |  |
| confidence | 探测置信度，帮助用户评估单个活跃火点像元的质量。置信度估算范围为火掩膜内所有火点像元的 0% 到 100%。置信度字段应谨慎使用；它在世界不同地区的含义很可能不同。 | 1000 |  |
| line_number | 该像元来源的 FIRMS CSV 文件中的行号。 | 1000 |  |

## 能拿来做什么

- 活跃火点与野火近实时监测
- 火灾排放与烧毁面积评估
- 应急管理与火险预警

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('FIRMS');
```

- 数据集编号（Earth Engine ID）：`FIRMS`
- 提供方：NASA / LANCE / EOSDIS、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/FIRMS
* [NASA/LANCE/NOAA20_VIIRS/C2](NASA_LANCE_NOAA20_VIIRS_C2)
* [NASA/LANCE/SNPP_VIIRS/C2](NASA_LANCE_SNPP_VIIRS_C2)

## 许可与引用

- 许可：proprietary
- 关键词：eosdis, fire, firms, geophysical, hotspot, lance, modis, nasa, thermal
- 数据引用：MODIS Collection 6 NRT Hotspot / Active Fire Detections MCD14DL.
Available on-line [https://earthdata.nasa.gov/firms](https://earthdata.nasa.gov/firms).
[doi:10.5067/FIRMS/MODIS/MCD14DL.NRT.006](https://doi.org/10.5067/FIRMS/MODIS/MCD14DL.NRT.006)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [FORMA Alert Thresholds](/pages/299d3b97/)
- [FORMA Alerts](/pages/d92138fe/)
- [FORMA Raw Output FIRMS](/pages/721e383c/)
- [FireCCI51: MODIS Fire_cci Burned Area Pixel Product, Version 5.1](/pages/2a6e2416/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
