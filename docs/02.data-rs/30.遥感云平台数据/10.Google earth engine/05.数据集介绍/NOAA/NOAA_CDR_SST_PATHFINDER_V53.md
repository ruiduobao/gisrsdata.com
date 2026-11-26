---
title: "NOAA AVHRR 探路者版本 5.3 拼接全球 4 千米海表温度"
date: 2026-11-03 12:00:00
permalink: /pages/18f0f810/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "avhrr"
  - "noaa"
  - "oceans"
  - "pathfinder"
  - "sea-ice"
  - "sst"
  - "temperature"
  - "wind"
---

# NOAA AVHRR 探路者版本 5.3 拼接全球 4 千米海表温度

英文原名：NOAA AVHRR Pathfinder Version 5.3 Collated Global 4km Sea Surface Temperature

## 这是什么数据

AVHRR 探路者版本 5.3 海表温度数据集（PFV53）是由 NOAA 国家海洋学数据中心与迈阿密大学 Rosenstiel 海洋与大气科学学院合作生产的全球每日两次 4 千米海表温度数据的集合。PFV53 从 NOAA 极轨卫星系列上的 AVHRR 仪器数据计算，使用基于 SeaDAS 的完全现代化系统。PFV53 数据近 100% 符合三级 C 产品的 GHRSST 数据规范版本 2.0，仅在「sses_bias」「sses_standard_deviation」与「sst_dtime」变量为空、因此未纳入 EE 资产方面偏离该标准。PFV53 数据通过 NOAA-7 至 NOAA-19 极轨业务环境卫星（POES）的业务时段收集，可从 1981 年到 2014 年获得。更多信息见 [NOAA 探路者站点](https://www.nodc.noaa.gov/satellitedata/pathfinder4km53/)。

更多波段细节见[技术规范](https://www.ncei.noaa.gov/pub/data/sds/cdr/CDRs/Sea_Surface_Temperature_Pathfinder/AlgorithmDescription_01B-08.pdf) 页。

这些数据由 GHRSST 与美国 NOAA 国家环境信息中心（NCEI）提供。本项目部分得到 NOAA 卫星气候数据记录（CDR）计划资助的支持。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球海洋；时间范围：1981 年至 2023 年；分辨率：4,000 米。
- 时间范围：1981-08-24 至 2023-12-30

## 分辨率与规格

- 空间分辨率：约 4,000 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| sea_surface_temperature | 海洋的皮肤温度。 | 4000 |  |
| dt_analysis | 本 SST 与前一天 SST 的差。 | 4000 |  |
| wind_speed | 这些风速由 NCEP-DOE 大气模式比较项目（AMIP-II）再分析（R-2）创建，表示海面以上 10 米的风。 | 4000 |  |
| sea_ice_fraction | 海冰浓度数据取自 EUMETSAT 海洋与海冰卫星应用设施（OSISAF）[全球逐日海冰浓度再处理数据集 accession.nodc.noaa.gov/0068294](https://data.cnra.ca.gov/dataset/global-daily-sea-ice-concentration-reprocessing-data-set-for-1978-2007-from-the-eumetsat-ocean-)，在这些数据可用时。数据从其原始极射赤面投影 10 千米空间分辨率重投影并插值到 4 千米探路者版本 5.3 格网。当某天两个半球都没有 OSISAF 数据时，海冰浓度数据取自 NOAA/NCDC 的四级 GHRSST DailyOI SST 产品中的 sea_ice_fraction 变量，并从 25 千米 DailyOI 格网插值到 4 千米探路者版本 5.3 格网。 | 4000 |  |
| aerosol_dynamic_indicator | 气溶胶光学厚度（100 KM）数据取自 CLASS AERO100 产品，它由 AVHRR 全球区域覆盖（GAC）数据的 AVHRR 通道 1 光学厚度反演创建。气溶胶光学厚度测量从其原始 1 度 x 1 度分辨率插值到 4 千米探路者版本 5.3 格网。 | 4000 |  |
| quality_level | 注意，原生探路者处理系统返回 0 到 7 的质量等级（7 为最佳质量；-1 表示缺失数据），并已尽可能转换为 GDS2 要求的六个等级（0 到 5，5 为最佳）。转换表如下：- GDS2 要求质量等级 5 = 原生探路者质量等级 7 == best_quality - GDS2 要求质量等级 4 = 原生探路者质量等级 4–6 == acceptable_quality - GDS2 要求质量等级 3 = 原生探路者质量等级 2–3 == low_quality - GDS2 要求质量等级 2 = 原生探路者质量等级 1 == worst_quality - GDS2 要求质量等级 1 = 原生探路者质量等级 0 = bad_data - GDS2 要求质量等级 0 = 原生探路者质量等级 -1 = missing_data 原生探路者质量等级记录在可选变量 pathfinder_quality_level 中。 | 4000 |  |
| pathfinder_quality_level | 原生探路者处理系统质量等级，范围 0 到 7，0 为最差、7 为最佳。 | 4000 |  |
| l2p_flags | 用于指定输入 SST 数据的类型，并传递输入二级 SST 数据集的原生标志。 | 4000 |  |

## 能拿来做什么

- 海表温度监测
- 海洋气候研究
- 渔业与海洋生态应用

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NOAA/CDR/SST_PATHFINDER/V53');
```

- 数据集编号（Earth Engine ID）：`NOAA/CDR/SST_PATHFINDER/V53`
- 提供方：NOAA、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NOAA_CDR_SST_PATHFINDER_V53

## 许可与引用

- 许可：proprietary
- 关键词：avhrr, noaa, oceans, pathfinder, sea-ice, sst, temperature, wind
- 数据引用：Baker-Yeboah, S., K. Saha, D. Zhang, K. S. Casey, R. Evans,
and K. A. Kilpatrick (2016). 'Pathfinder Version 5.3 AVHRR Sea Surface
Temperature Climate Data Record', Fall AGU 2016 Poster
(manuscript in progress)

- DOI：10.7289/V52J68XX

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [NOAA CDR WHOI：海表温度，版本 2](/pages/4fef452a/)
- [NOAA CDR：海洋热通量，版本 2](/pages/ab47b752/)
- [NOAA CDR：海洋近地表大气特性，版本 2](/pages/11c640c9/)
- [ECMWF 近实时 IFS 海浪预报](/pages/2f7bc360/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
