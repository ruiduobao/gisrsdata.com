---
title: "GEOS-CF Ana htf v2：戈达德地球观测系统成分预报"
date: 2026-11-03 12:00:00
permalink: /pages/cb6c953c/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "composition"
  - "forecast"
  - "geos"
  - "geos-cf"
  - "gmao"
  - "nasa"
---

# GEOS-CF Ana htf v2：戈达德地球观测系统成分预报

英文原名：GEOS-CF Ana htf v2: Goddard Earth Observing System Composition Forecast

## 这是什么数据

本数据集包含 15 分钟间隔的高时间频率数据（htf）的分析（ana）。它由原始 GEOS-CF 集合 htf_inst_15mn_glo_L1440x721_slv 创建。戈达德地球观测系统成分预报（GEOS-CF）系统是来自 NASA [全球建模与同化办公室（GMAO）](https://gmao.gsfc.nasa.gov/) 的全球成分预测系统。

GEOS-CF 为大气化学研究提供了一个工具，目标是补充 NASA 广泛的星基与原位观测。GEOS-CF 在 GEOS 天气与气溶胶建模系统基础上扩展，引入 [GEOS-Chem](http://wiki.seas.harvard.edu/geos-chem/) 化学模块，提供大气成分的后报与 5 天预报，包括臭氧（O3）、一氧化碳（CO）、二氧化氮（NO2）、二氧化硫（SO2）、粗颗粒物（PM10）与细颗粒物（PM2.5）。集成在 GEOS-CF 中的化学模块与离线 GEOS-Chem 模式相同，并随时受益于 GEOS-Chem 社区提供的创新。输出在全球以 0.25° 水平分辨率提供。更多细节请参考 [GEOS-CF 产品页面](https://gmao.gsfc.nasa.gov/gmao-products/geos-cf/)。

2025 年 10 月，GEOS-CF 系统引入了一次重大更新，即 GEOS-CF v2。此变更包括对 GEOS 大气环流模式与 GEOS-Chem 化学模式的更新、将气象重演到 [GEOS IT](https://gmao.gsfc.nasa.gov/gmao-products/geos-it/)、直接同化来自 NASA Aura OMI 与 MLS 仪器的平流层廓线与柱臭氧，以及人为排放源的更新。对这些更新的评估正在进行中；结果可用时将添加到本说明中。[初步结果](https://gmao.gsfc.nasa.gov/science-snapshots/improved-atmospheric-composition-forecasting-in-geos-cf-version-2/) 表明，相对于 GEOS-CF v1，GEOS-CF v2 显著改善了近地表 PM2.5 与 SO2 的表征。O3 与 NO2 的表征在大部分大气柱中普遍改善，其中 NO2 在 GEOS-CF v2 中显著低于 v1。虽然近地表 O3 的表征相对于 GEOS-CF v1 有所改善，但与美国环境保护署的臭氧监测数据相比仍存在高偏差。

由于两个系统之间的广泛变化，鼓励 GEOS-CF 用户在分析中将原始系统（v1）与新系统（v2）的输出分开处理。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2025 年至 2026 年；分辨率：27,750 米。
- 时间范围：2025-08-04 至 2026-11-01

## 分辨率与规格

- 空间分辨率：约 27,750 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CO | 一氧化碳（CO，MW = 28.01 g mol-1）干空气摩尔分数。 | 27750 |  |
| NO2 | 二氧化氮（NO2，MW = 46.01 g mol-1）干空气摩尔分数。 | 27750 |  |
| O3 | 臭氧（O3，MW = 48.0 g mol-1）干空气体积混合比。 | 27750 |  |
| PM25_RH35 | 直径低于 2.5 微米的颗粒物在 RH 35% 下的质量（含水）干空气质量浓度。 | 27750 |  |
| SLP | 海平面气压。 | 27750 |  |
| SO2 | 二氧化硫（SO2，MW = 64.04 g mol-1）干空气摩尔分数。 | 27750 |  |
| U | 东向风。 | 27750 |  |
| V | 北向风。 | 27750 |  |

## 能拿来做什么

- 大气成分预报与空气质量研究
- 气溶胶与污染物分析
- 大气化学建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v2/ana/htf');
```

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v2/ana/htf`
- 提供方：NASA / GMAO、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v2_ana_htf

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, composition, forecast, geos, geos-cf, gmao, nasa
- 数据引用：Keller, C. A., Knowland, K. E., Duncan, B. N., Liu, J., Anderson, D. C.,
Das, S., ... & Pawson, S. (2021). Description of the NASA GEOS composition
forecast modeling system GEOS-CF v1.0. Journal of Advances in Modeling
Earth Systems, 13(4), e2020MS002413.
[doi:10.1029/2020MS002413](https://doi.org/10.1029/2020MS002413)

Knowland, K. E., Keller, C. A., Wales, P. A., Wargan, K., Coy, L., 
Johnson, M.S., ... & Pawson, S. (2022). NASA GEOS Composition Forecast Modeling 
System GEOS‐CF v1.0: Stratospheric Composition. Journal of Advances in Modeling
Earth Systems, 14, e2021MS002852. 
[doi:10.1029/2021MS002852](https://doi.org/10.1029/2021MS002852)

Note: these citations refer to the original GEOS-CF (v1) system; citations describing 
the new (v2) system will be added following publication.

- DOI：10.1029/2020MS002413

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEOS-CF ana tavg1hr v2: Goddard Earth Observing System Composition Forecast](/pages/b313d8d8/)
- [GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast](/pages/657fd24d/)
- [GEOS-CF fcst htf v2: Goddard Earth Observing System Composition Forecast](/pages/09c96d14/)
- [GEOS-CF fcst tavg1hr v1: Goddard Earth Observing System Composition Forecast](/pages/fc3e6d2f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
