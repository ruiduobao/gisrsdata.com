---
title: "NOAA CDR：海洋近地表大气特性，版本 2"
date: 2026-11-03 12:00:00
permalink: /pages/11c640c9/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-temperature"
  - "atmospheric"
  - "cdr"
  - "hourly"
  - "humidity"
  - "noaa"
  - "oceans"
  - "osb"
  - "wind"
---

# NOAA CDR：海洋近地表大气特性，版本 2

英文原名：NOAA CDR: Ocean Near-Surface Atmospheric Properties, Version 2

## 这是什么数据

海洋近地表大气特性数据集是 NOAA 海洋表面束（OSB）的一部分，提供无冰海洋表面上气温、风速与比湿的高质量气候数据记录（CDR）。

这些大气特性基于国防气象卫星计划（DMSP）航天器上专用传感器微波/成像仪（SSM/I）与专用传感器微波/成像仪探测仪（SSMIS）的亮温数据，使用神经网络计算。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：1988 年至 2021 年；分辨率：27,830 米。
- 时间范围：1988-01-01 至 2021-08-31

## 分辨率与规格

- 空间分辨率：约 27,830 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| air_temperature | 10 米气温。 | 27830 |  |
| specific_humidity | 10 米比湿。 | 27830 |  |
| wind_speed | 10 米风速。 | 27830 |  |
| fill_missing_qc | 质量控制标志。 | 27830 |  |

## 能拿来做什么

- 海洋气候数据记录
- 海气相互作用研究
- 气候监测

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/ATMOS_NEAR_SURFACE/V2');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/ATMOS_NEAR_SURFACE/V2`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_ATMOS_NEAR_SURFACE_V2

## 许可与引用

- 许可：proprietary
- 关键词：air-temperature, atmospheric, cdr, hourly, humidity, noaa, oceans, osb, wind
- 数据引用：Clayson, Carol Anne, Brown, Jeremiah, and NOAA CDR Program (2016). NOAA
Climate Data Record Ocean Surface Bundle (OSB) Climate Data Record
(CDR) of Near-surface Atmospheric Properties, Version 2. [indicate subset
used]. NOAA National ClimaticData Center. [doi:10.7289/V55T3HH0](https://doi.org/10.7289/V55T3HH0).

- DOI：10.7289/V55T3HH0

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA AVHRR 探路者版本 5.3 拼接全球 4 千米海表温度](/pages/18f0f810/)
- [NOAA CDR WHOI：海表温度，版本 2](/pages/4fef452a/)
- [NOAA CDR：海洋热通量，版本 2](/pages/ab47b752/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
