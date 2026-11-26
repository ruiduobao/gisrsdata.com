---
title: "NOAA CDR AVHRR：地表反射率，版本 5"
date: 2026-11-03 12:00:00
permalink: /pages/6d18f9ec/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "cdr"
  - "daily"
  - "land"
  - "noaa"
  - "reflectance"
  - "satellite-imagery"
  - "sr"
---

# NOAA CDR AVHRR：地表反射率，版本 5

英文原名：NOAA CDR AVHRR: Surface Reflectance, Version 5

## 这是什么数据

NOAA AVHRR 地表反射率气候数据记录（CDR）包含源自七颗 NOAA 极轨卫星上高级甚高分辨率辐射计（AVHRR）传感器的格网逐日地表反射率与亮温。数据以 0.05° 分辨率格网化，在全球陆地表面上计算。

本数据集的已知问题包括：

- TIMEOFDAY 变量包含过大 1 天的值

- 纬度值未正确关联到格网单元中心，误差 < 0.002 度

- 经度值未正确关联到格网单元中心，误差 < 0.02 度

见[数据提供方的技术说明](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Surface_Reflectance/AVHRR/AlgorithmDescriptionAVHRR_01B-20a.pdf)。

提供方注：N-19（最后一颗搭载 AVHRR 传感器的 NOAA 卫星）的轨道漂移开始严重降低反演产品质量。因此，VIIRS 现在是 2014 年至今这些产品使用的主要传感器。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球陆地；时间范围：1981 年至 2013 年；分辨率：5,566 米。
- 时间范围：1981-06-24 至 2013-12-31

## 分辨率与规格

- 空间分辨率：约 5,566 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| SREFL_CH1 | 双向地表反射率。 | 5566 | 640nm |
| SREFL_CH2 | 双向地表反射率。 | 5566 | 860nm |
| SREFL_CH3 | 双向地表反射率。 | 5566 | 3.75&micro;m |
| BT_CH3 | 亮温。 | 5566 | 3.75&micro;m |
| BT_CH4 | 亮温。 | 5566 | 11.0&micro;m |
| BT_CH5 | 亮温。 | 5566 | 12.0&micro;m |
| TIMEOFDAY | 自一天开始的小时数。 | 5566 |  |
| RELAZ | 相对传感器方位角。 | 5566 |  |
| SZEN | 太阳天顶角。 | 5566 |  |
| VZEN | 观测天顶角，比例 0.01。 | 5566 |  |
| QA | 质量控制位标志。 | 5566 |  |

## 能拿来做什么

- 气候数据记录应用
- 植被长期变化监测
- 气候变化研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/SR/V5');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/AVHRR/SR/V5`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_SR_V5

## 许可与引用

- 许可：proprietary
- 关键词：avhrr, cdr, daily, land, noaa, reflectance, satellite-imagery, sr
- 数据引用：Eric Vermote, Chris Justice, Ivan Csiszar, Jeff Eidenshink, Ranga Myneni,
Frederic Baret, Ed Masuoka, Robert Wolfe, Martin Claverie and NOAA CDR
Program (2014): NOAA Climate Data Record (CDR) of AVHRR Surface Reflectance,
Version 4. [indicate subset used]. NOAA National Climatic Data Center.

- DOI：10.7289/V53776Z4

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR AVHRR：地表反射率，版本 4 [已弃用]](/pages/2d8d516d/)
- [ALOS AVNIR-2 正射影像（ORI）](/pages/d4abf354/)
- [ALOS-2 PALSAR-2 条带模式 2.1 级产品（2024 年 1 月能登地震应急观测）](/pages/b836b19e/)
- [ASTER L1T 辐射亮度影像](/pages/b48e6fb4/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
