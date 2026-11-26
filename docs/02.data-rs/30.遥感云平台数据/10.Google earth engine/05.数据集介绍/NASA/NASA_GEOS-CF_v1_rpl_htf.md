---
title: "GEOS-CF rpl htf v1：戈达德地球观测系统成分预报"
date: 2026-11-03 12:00:00
permalink: /pages/9a7ef21b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "atmosphere"
  - "composition"
  - "forecast"
  - "geos"
  - "gmao"
  - "nasa"
---

# GEOS-CF rpl htf v1：戈达德地球观测系统成分预报

英文原名：GEOS-CF rpl htf v1: Goddard Earth Observing System Composition Forecast

## 这是什么数据

本数据集包含高时间频率数据（htf）的气象重演（rpl）。戈达德地球观测系统成分预报（GEOS-CF）系统是来自 NASA [全球建模与同化办公室（GMAO）](https://gmao.gsfc.nasa.gov/) 的全球成分预测系统。

GEOS-CF 为大气化学研究提供了一个新工具，目标是补充 NASA 广泛的星基与原位观测。GEOS-CF 在 GEOS 天气与气溶胶建模系统基础上扩展，引入 [GEOS-Chem](http://wiki.seas.harvard.edu/geos-chem/) 化学模块，提供大气成分的后报与 5 天预报，包括臭氧（O3）、一氧化碳（CO）、二氧化氮（NO2）、二氧化硫（SO2）与细颗粒物（PM2.5）。集成在 GEOS-CF 中的化学模块与离线 GEOS-Chem 模式相同，并随时受益于 GEOS-Chem 社区提供的创新。模式输出在 0.25° 纬度-经度格网上提供。更多细节请参考 [GEOS-CF 产品页面](https://gmao.gsfc.nasa.gov/gmao-products/geos-cf/)。

[GEOS-CF 评估](https://doi.org/10.1029/2020MS002413) 对照 2018–2019 年的卫星、臭氧探空仪与地表观测显示，O3、NO2 与 CO 的模拟浓度逼真，归一化平均偏差为 −0.1 至 0.3，归一化均方根误差在 0.1–0.4 之间，相关系数在 0.3–0.8 之间。与地表观测的比较突出了在世界许多地区与所有季节对空气污染物的成功表征，但也突出了当前的局限性，如 SO2 的全球高估以及对美国东南部夏季 O3 的过高预测。GEOS-CF v1 由于 GEOS-Chem v12.0.1 中已知的问题（已在后续版本中解决），一般将气溶胶高估 20%–50%。5 天预报的技能分数与 1 天后报相当。通过使用机器学习方法对地表模式输出应用偏差校正，模式技能可显著提高。

**请注意：** GEOS-CF 的新版本 v2 于 2026 年 1 月发布。对 GEOS-CF 系统的更新包括对 GEOS 大气环流模式与 GEOS-Chem 化学模式的更新、将气象重演到 [GEOS IT](https://gmao.gsfc.nasa.gov/gmao-products/geos-it/)、平流层廓线与柱臭氧的直接同化，以及人为排放源的更新。许多相同的产品可用，一些新产品已添加，但其他产品已停产。此外，GEOS-CF v2 数据不会回溯处理以覆盖与 GEOS-CF v1 相同的时段。因此，我们认为 GEOS-CF v2 是 GEOS-CF v 数据记录的延续与补充，而不是 GEOS-CF v1 数据的替代。请参阅 [GEOS-CF 系统描述](https://gmao.gsfc.nasa.gov/gmao-products/geos-cf/system-description_geos-cf/) 了解更新摘要，并在决定在分析中使用哪个版本时考虑 [GEOS-CF v2 初步评估结果](https://gmao.gsfc.nasa.gov/science-snapshots/improved-atmospheric-composition-forecasting-in-geos-cf-version-2/)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2018 年至 2026 年；分辨率：27,750 米。
- 时间范围：2018-01-01 至 2026-01-02

## 分辨率与规格

- 空间分辨率：约 27,750 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| CO | 一氧化碳（CO，MW = 28.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NO2 | 二氧化氮（NO2，MW = 46.00 g mol-1）干空气体积混合比。 | 27750 |  |
| O3 | 臭氧（O3，MW = 48.00 g mol-1）干空气体积混合比。 | 27750 |  |
| PM25_RH35_GCC | 直径低于 2.5 微米的颗粒物 RH 35。 | 27750 |  |
| PM25_RH35_GOCART | 总重构 PM2.5 RH 35。 | 27750 |  |
| Q | 比湿。 | 27750 |  |
| RH | 湿润后的相对湿度。 | 27750 |  |
| SLP | 海平面气压。 | 27750 |  |
| SO2 | 二氧化硫（SO2，MW = 64.00 g mol-1）干空气体积混合比。 | 27750 |  |
| T | 气温。 | 27750 |  |
| U | 东向风。 | 27750 |  |
| V | 北向风。 | 27750 |  |

## 能拿来做什么

- 大气成分预报与空气质量研究
- 气溶胶与污染物分析
- 大气化学建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v1/rpl/htf');
```

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v1/rpl/htf`
- 提供方：NASA / GMAO、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v1_rpl_htf

## 许可与引用

- 许可：proprietary
- 关键词：atmosphere, composition, forecast, geos, gmao, nasa
- 数据引用：Keller, C. A., Knowland, K. E., Duncan, B. N., Liu, J., Anderson, D. C.,
Das, S., ... & Pawson, S. (2021). Description of the NASA GEOS composition
forecast modeling system GEOS-CF v1. 0. Journal of Advances in Modeling
Earth Systems, 13(4), e2020MS002413.
[doi:10.1029/2020MS002413](https://doi.org/10.1029/2020MS002413)

- DOI：10.1029/2020MS002413

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GEOS-CF Ana htf v2: Goddard Earth Observing System Composition Forecast](/pages/cb6c953c/)
- [GEOS-CF ana tavg1hr v2: Goddard Earth Observing System Composition Forecast](/pages/b313d8d8/)
- [GEOS-CF fcst htf v1: Goddard Earth Observing System Composition Forecast](/pages/657fd24d/)
- [GEOS-CF fcst htf v2: Goddard Earth Observing System Composition Forecast](/pages/09c96d14/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
