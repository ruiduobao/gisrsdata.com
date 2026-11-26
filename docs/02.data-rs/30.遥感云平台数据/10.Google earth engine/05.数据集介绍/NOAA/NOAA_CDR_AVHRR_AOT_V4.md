---
title: "NOAA CDR AVHRR AOT：全球海洋逐日气溶胶光学厚度 v04"
date: 2026-11-03 12:00:00
permalink: /pages/a9811dc6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aerosol"
  - "aot"
  - "atmosphere"
  - "atmospheric"
  - "avhrr"
  - "cdr"
  - "daily"
  - "noaa"
  - "optical"
  - "pollution"
---

# NOAA CDR AVHRR AOT：全球海洋逐日气溶胶光学厚度 v04

英文原名：NOAA CDR AVHRR AOT: Daily Aerosol Optical Thickness Over Global Oceans, v04

## 这是什么数据

NOAA 气溶胶光学厚度（AOT）气候数据记录（CDR）是从 PATMOS-x AVHRR 二级 b 通道 1（0.63 微米）轨道晴空辐射导出的全球逐日 0.1 度派生数据的集合。气溶胶产品在白天海洋上的无云条件下从 AVHRR 影像生成。

由于与水耀光区和陆地表面上的地表反射率相关的相对较大不确定性，以及有限的 AVHRR 反演通道，本数据集仅包括非耀光水面（具体为轨道反太阳侧、视角距镜面射线 40 度以上）上的反演。更多细节，见[算法描述](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Aerosol_Optical_Thickness/AlgorithmDescription_01B-04.pdf)。

影像与数据处理由 NOAA 国家气候数据中心完成。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：1981 年至 2026 年；分辨率：11,132 米。
- 时间范围：1981-01-01 至 2026-06-30

## 分辨率与规格

- 空间分辨率：约 11,132 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| aot | 大气光学厚度；气溶胶通过吸收或散射光阻止光透射的程度。0.01 的值对应极其清洁的大气，0.4 的值对应非常朦胧的条件。美国的平均气溶胶光学深度为 0.1 至 0.15。 | 11132 |  |

## 能拿来做什么

- 海洋气溶胶长期监测
- 气候数据记录应用
- 大气环境研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/AVHRR/AOT/V4');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/AVHRR/AOT/V4`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_AVHRR_AOT_V4

## 许可与引用

- 许可：proprietary
- 关键词：aerosol, aot, atmosphere, atmospheric, avhrr, cdr, daily, noaa, optical, pollution
- 数据引用：Zhao, Xuepeng; and NOAA CDR Program: NOAA Climate Data Record (CDR)
of AVHRR Daily and Monthly Aerosol Optical Thickness (AOT) over Global
Oceans, Version 4.0. [indicate subset used]. NOAA National Centers for
Environmental Information. [doi:10.25921/w3zj-4y48](https://doi.org/10.25921/w3zj-4y48)
[date accessed].

- DOI：10.25921/w3zj-4y48

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR AVHRR AOT：全球海洋逐日气溶胶光学厚度 v03 [已弃用]](/pages/53ecd31b/)
- [AERDB_D3_VIIRS_NOAA20.002：VIIRS/NOAA-20 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/fa53b9c1/)
- [AERDB_D3_VIIRS_SNPP.002：VIIRS/SNPP 深蓝气溶胶光学厚度逐日三级全球 1.0 度格网](/pages/64c851e2/)
- [ERA5 逐小时数据 — ECMWF 气候再分析](/pages/2de85afd/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
