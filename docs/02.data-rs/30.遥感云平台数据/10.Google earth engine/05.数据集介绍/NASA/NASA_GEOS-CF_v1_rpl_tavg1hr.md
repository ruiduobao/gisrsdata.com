---
title: "GEOS-CF rpl tavg1hr v1：戈达德地球观测系统成分预报"
date: 2026-11-03 12:00:00
permalink: /pages/b0d4fd6a/
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

# GEOS-CF rpl tavg1hr v1：戈达德地球观测系统成分预报

英文原名：GEOS-CF rpl tavg1hr v1: Goddard Earth Observing System Composition Forecast

## 这是什么数据

本数据集包含一小时时间平均数据（tavg1hr）的气象重演（rpl）。它由合并原始 GEOS-CF 集合 chm_tavg_1hr_g1440x721_v1、met_tavg_1hr_g1440x721_x1 与 xgc_tavg_1hr_g1440x721_x1 构建。戈达德地球观测系统成分预报（GEOS-CF）系统是来自 NASA [全球建模与同化办公室（GMAO）](https://gmao.gsfc.nasa.gov/) 的全球成分预测系统。

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
| ACET | 丙酮（CH3C(O)CH3，MW = 58.08 g mol-1）干空气体积混合比。 | 27750 |  |
| ALD2 | 乙醛（CH3CHO，MW = 44.05 g mol-1）干空气体积混合比。 | 27750 |  |
| ALK4 | 集总 ≥ C4 烷烃（MW = 58.12 g mol-1）干空气体积混合比。 | 27750 |  |
| AOD550_BC | 550nm 黑碳光学厚度。 | 27750 |  |
| AOD550_CLOUD | 云光学厚度。 | 27750 |  |
| AOD550_DST1 | 550nm 沙尘分档 1 光学厚度。 | 27750 |  |
| AOD550_DST2 | 550nm 沙尘分档 2 光学厚度。 | 27750 |  |
| AOD550_DST3 | 550nm 沙尘分档 3 光学厚度。 | 27750 |  |
| AOD550_DST4 | 550nm 沙尘分档 4 光学厚度。 | 27750 |  |
| AOD550_DST5 | 550nm 沙尘分档 5 光学厚度。 | 27750 |  |
| AOD550_DST6 | 550nm 沙尘分档 6 光学厚度。 | 27750 |  |
| AOD550_DST7 | 550nm 沙尘分档 7 光学厚度。 | 27750 |  |
| AOD550_DUST | 550nm 沙尘光学厚度。 | 27750 |  |
| AOD550_OC | 550nm 有机碳光学厚度。 | 27750 |  |
| AOD550_SALA | 550nm 积聚模态海盐光学厚度。 | 27750 |  |
| AOD550_SALC | 550nm 粗模态海盐光学厚度。 | 27750 |  |
| AOD550_SULFATE | 550nm 硫酸盐光学厚度。 | 27750 |  |
| BCPI | 亲水性黑碳气溶胶（MW = 12.01 g mol-1）干空气体积混合比。 | 27750 |  |
| BCPO | 疏水性黑碳气溶胶（MW = 12.01 g mol-1）干空气体积混合比。 | 27750 |  |
| BENZ | 苯（C6H6，MW = 78.11 g mol-1）干空气体积混合比。 | 27750 |  |
| C2H6 | 乙烷（C2H6，MW = 30.07 g mol-1）干空气体积混合比。 | 27750 |  |
| C3H8 | 丙烷（C3H8，MW = 44.10 g mol-1）干空气体积混合比。 | 27750 |  |
| CH4 | 甲烷（CH4，MW = 16.00 g mol-1）干空气体积混合比。 | 27750 |  |
| CLDTT | 总云面积分数。 | 27750 |  |
| CO | 一氧化碳（CO，MW = 28.00 g mol-1）干空气体积混合比。 | 27750 |  |
| DRYDEPFLX_BCPI | 亲水性黑碳气溶胶（MW = 12.01 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_BCPO | 疏水性黑碳气溶胶（MW = 12.01 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_DST1 | 沙尘气溶胶，Reff = 0.7 微米（MW = 29.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_DST2 | 沙尘气溶胶，Reff = 1.4 微米（MW = 29.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_DST3 | 沙尘气溶胶，Reff = 2.4 微米（MW = 29.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_DST4 | 沙尘气溶胶，Reff = 4.5 微米（MW = 29.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_HCHO | 甲醛（CH2O，MW = 30.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_HNO3 | 硝酸（HNO3，MW = 63.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_NH3 | 氨（NH3，MW = 17.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_NH4 | 铵（NH4，MW = 18.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_NIT | 无机硝酸盐（MW = 62.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_NO2 | 二氧化氮（NO2，MW = 46.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_O3 | 臭氧（O3，MW = 48.00 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_OCPI | 亲水性有机碳气溶胶（MW = 12.01 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_OCPO | 疏水性有机碳气溶胶（MW = 12.01 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_SALA | 细（0.01–0.05 微米）海盐气溶胶（MW = 31.40 g mol-1）干沉降通量。 | 27750 |  |
| DRYDEPFLX_SALC | 粗（0.5–8 微米）海盐气溶胶（MW = 31.40 g mol-1）干沉降通量。 | 27750 |  |
| DST1 | 沙尘气溶胶，Reff = 0.7 微米（MW = 29.00 g mol-1）干空气体积混合比。 | 27750 |  |
| DST2 | 沙尘气溶胶，Reff = 1.4 微米（MW = 29.00 g mol-1）干空气体积混合比。 | 27750 |  |
| DST3 | 沙尘气溶胶，Reff = 2.4 微米（MW = 29.00 g mol-1）干空气体积混合比。 | 27750 |  |
| DST4 | 沙尘气溶胶，Reff = 4.5 微米（MW = 29.00 g mol-1）干空气体积混合比。 | 27750 |  |
| EOH | 乙醇（C2H5OH，MW = 46.07 g mol-1）干空气体积混合比。 | 27750 |  |
| H2O2 | 过氧化氢（H2O2，MW = 34.00 g mol-1）干空气体积混合比。 | 27750 |  |
| HCHO | 甲醛（CH2O，MW = 30.00 g mol-1）干空气体积混合比。 | 27750 |  |
| HNO3 | 硝酸（HNO3，MW = 63.00 g mol-1）干空气体积混合比。 | 27750 |  |
| HNO4 | 过氧硝酸（HNO4，MW = 79.00 g mol-1）干空气体积混合比。 | 27750 |  |
| ISOP | 异戊二烯（CH2=C(CH3)CH=CH2，MW = 68.12 g mol-1）干空气体积混合比。 | 27750 |  |
| MACR | 甲基丙烯醛（CH2=C(CH3)CHO，MW = 70.00 g mol-1）干空气体积混合比。 | 27750 |  |
| MEK | 甲基乙基酮（RC(O)R，MW = 72.11 g mol-1）干空气体积混合比。 | 27750 |  |
| MVK | 甲基乙烯基酮（CH2=CHC(=O)CH3，MW = 70.00 g mol-1）干空气体积混合比。 | 27750 |  |
| N2O5 | 五氧化二氮（N2O5，MW = 108.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NH3 | 氨（NH3，MW = 17.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NH4 | 铵（NH4，MW = 18.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NIT | 无机硝酸盐（MW = 62.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NO | 一氧化氮（NO，MW = 30.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NO2 | 二氧化氮（NO2，MW = 46.00 g mol-1）干空气体积混合比。 | 27750 |  |
| NOy | 活性氮 = NO NO2 HNO3 HNO4 HONO 2xN2O5 PAN 有机硝酸盐 气溶胶硝酸盐。 | 27750 |  |
| O3 | 臭氧（O3，MW = 48.00 g mol-1）干空气体积混合比。 | 27750 |  |
| OCPI | 亲水性有机碳气溶胶（MW = 12.01 g mol-1）干空气体积混合比。 | 27750 |  |
| OCPO | 疏水性有机碳气溶胶（MW = 12.01 g mol-1）干空气体积混合比。 | 27750 |  |
| PAN | 过氧乙酰硝酸酯（CH3C(O)OONO2，MW = 121.00 g mol-1）干空气体积混合比。 | 27750 |  |
| PHIS | 地表位势高度。 | 27750 |  |
| PM25_RH35_GCC | 直径低于 2.5 微米的颗粒物 RH 35。 | 27750 |  |
| PM25_RH35_GOCART | 总重构 PM2.5 RH 35。 | 27750 |  |
| PM25bc_RH35_GCC | 直径低于 2.5 微米的黑碳颗粒物 RH 35。 | 27750 |  |
| PM25du_RH35_GCC | 直径低于 2.5 微米的沙尘颗粒物 RH 35。 | 27750 |  |
| PM25ni_RH35_GCC | 直径低于 2.5 微米的硝酸盐颗粒物 RH 35。 | 27750 |  |
| PM25oc_RH35_GCC | 直径低于 2.5 微米的有机碳颗粒物 RH 35。 | 27750 |  |
| PM25soa_RH35_GCC | 直径低于 2.5 微米的二次有机气溶胶颗粒物 RH 35。 | 27750 |  |
| PM25ss_RH35_GCC | 直径低于 2.5 微米的海盐颗粒物 RH 35。 | 27750 |  |
| PM25su_RH35_GCC | 直径低于 2.5 微米的硫酸盐颗粒物 RH 35。 | 27750 |  |
| PRPE | 集总 ≥ C3 烯烃（C3H6，MW = 42.08 g mol-1）干空气体积混合比。 | 27750 |  |
| PS | 地表气压。 | 27750 |  |
| Q | 比湿。 | 27750 |  |
| Q10M | 10 米比湿。 | 27750 |  |

## 能拿来做什么

- 大气成分预报与空气质量研究
- 气溶胶与污染物分析
- 大气化学建模

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GEOS-CF/v1/rpl/tavg1hr');
```

- 数据集编号（Earth Engine ID）：`NASA/GEOS-CF/v1/rpl/tavg1hr`
- 提供方：NASA / GMAO、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GEOS-CF_v1_rpl_tavg1hr

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
