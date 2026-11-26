---
title: "呼吸地球系统模拟器（BESS）辐射 v1"
date: 2026-11-03 12:00:00
permalink: /pages/39b2b51f/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "climate"
  - "evapotranspiration"
  - "gpp"
  - "modis-derived"
  - "par"
  - "radiation"
  - "shortwave"
  - "weather-and-climate"
---

# 呼吸地球系统模拟器（BESS）辐射 v1

英文原名：Breathing Earth System Simulator (BESS) Radiation v1

## 这是什么数据

呼吸地球系统模拟器（BESS）是一个简化的基于过程的模型，耦合大气与冠层辐射传输、冠层光合作用、蒸腾与能量平衡。它将大气辐射传输模型与人工神经网络耦合，以 MODIS 大气产品为强迫，生成 5 公里逐日产品。

出版物：

* Ryu Youngryel、Chongya Jiang、Hideki Kobayashi、Matteo Detto，MODIS-derived global land products of shortwave radiation and diffuse and total photosynthetically active radiation at 5km resolution from 2000. Remote Sensing of Environment，Volume 204，2018。[doi:10.1016/j.rse.2017.09.021](https://doi.org/10.1016/j.rse.2017.09.021)

## 覆盖范围与时间

- 覆盖范围：空间：全球陆地；时间：2001 年至 2021 年（逐日）；分辨率：5,500 米。
- 时间范围：2001-01-01 至 2021-12-31

## 分辨率与规格

- 空间分辨率：约 5,500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| PAR_Daily | 空气中地表向下光合辐射通量 | 5500 |  |
| PARdiff_Daily | 空气中地表散射向下光合辐射通量 | 5500 |  |
| RSDN_Daily | 空气中地表向下短波通量 | 5500 |  |

## 能拿来做什么

- 做全球辐射与光合有效辐射的长时序分析。
- 为 GPP 与蒸散发建模提供辐射强迫。
- 分析辐射的年际变化与趋势。

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('SNU/ESL/BESS/Rad/v1');
```

- 数据集编号（Earth Engine ID）：`SNU/ESL/BESS/Rad/v1`
- 提供方：Seoul National University (SNU)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/SNU_ESL_BESS_Rad_v1

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：climate, evapotranspiration, gpp, modis-derived, par, radiation, shortwave, weather-and-climate
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [AG100：ASTER 全球发射率数据集 100 米 V003](/pages/3510f165/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ECOSTRESS 分片辅助 NDVI 与反照率 L2 全球 70 米 V002](/pages/a7bebe55/)
- [ECOSTRESS 地表温度与发射率 L2 全球 70 米 V002](/pages/f726b0e6/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
