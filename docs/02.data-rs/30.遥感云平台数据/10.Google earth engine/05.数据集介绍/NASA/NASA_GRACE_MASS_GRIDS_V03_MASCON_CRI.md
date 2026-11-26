---
title: "GRACE 月度质量格网第 03 版 - 全球 Mascon（CRI 滤波）[已弃用]"
date: 2026-11-03 12:00:00
permalink: /pages/08fb92a4/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "grace"
  - "gravity"
  - "jpl"
  - "mascon"
  - "mass"
  - "nasa"
  - "surface-ground-water"
  - "tellus"
  - "water"
---

# GRACE 月度质量格网第 03 版 - 全球 Mascon（CRI 滤波）[已弃用]

英文原名：GRACE Monthly Mass Grids Version 03 - Global Mascon (CRI Filtered) [deprecated]

## 这是什么数据

本数据集包含格网化的月度全球水储量/高度异常（相对于时间平均），源自 GRACE 与 GRACE-FO 并在 JPL 使用 Mascon 方法（RL06.1Mv03）处理。此版本的数据采用海岸线分辨率改进（CRI）滤波，减少跨海岸线的信号泄漏误差。这些数据以 netCDF 格式在单个数据文件中提供，可用于海洋、冰与水文现象的分析。水储量/高度异常以等效水厚单位（厘米）给出。此处提供的解源自以地理定位的球冠质量集中函数而非全球球谐系数求解月度重力场变化。此外，在解反演期间引入了真实的地球物理信息，以内在地去除相关误差。因此，这些 Mascon 格网不需要像传统球谐重力解那样去条带或平滑。完整的 Mascon 解由 4,551 个相对独立的地表质量变化估计组成，使用单个 mascon 的等面积 3 度格网推导。这些单个 mascon 的一个子集跨越海岸线，包含混合的陆地与海洋质量变化信号。在后处理步骤中，对这些混合陆地/海洋 mascon 应用 CRI 滤波以分离陆地与海洋质量。用于执行此分离的陆地掩膜与本数据集在同一目录中提供。由于单个 mascon 对重力场起固有平滑作用，一组可选的增益因子（用于大陆水文应用）也可在与 Mascon 数据相同的目录中提供，可应用于解以研究子 mascon 分辨率上的质量变化信号。此 RL06.1Mv03 是先前 [Tellus JPL Mascon RL06Mv02](https://doi.org/10.5067/TEMSC-3JC62) 的更新版本。RL06.1Mv03 与 RL06Mv02 的区别仅在于用于 GF2（GRACE-FO 2）卫星的一级 B 加速度计移植数据；RL06.1Mv03 使用 ACH 数据产品。更多信息，请访问 [GRACE 页面](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/)。有关 Mascon 解的详细描述，包括数学推导、地球物理约束的实现与解验证，请见 [Watkins 等，2015](https://doi.org/10.1002/2014JB011547)。有关 CRI 滤波实现的详细描述，请见 [Wiese 等，2016](https://doi.org/10.1002/2016WR019344)。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2024 年；分辨率：55,660 米。
- 时间范围：2002-03-31 至 2024-03-31

## 分辨率与规格

- 空间分辨率：约 55,660 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| lwe_thickness | 厘米等效液态水厚。 | 55660 |  |
| uncertainty | 每个 3 度 mascon 估计的 1 西格玛不确定性。所提供的不确定性估计被认为是保守的。见提供方的[误差与不确定性估计部分](https://grace.jpl.nasa.gov/data/get-data/jpl_global_mascons/)。 | 55660 |  |

## 能拿来做什么

- 陆地水储量变化监测
- 冰盖与冰川质量平衡
- 地下水与海平面研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('NASA/GRACE/MASS_GRIDS_V03/MASCON_CRI');
```

- 数据集编号（Earth Engine ID）：`NASA/GRACE/MASS_GRIDS_V03/MASCON_CRI`
- 提供方：NASA Jet Propulsion Laboratory、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/NASA_GRACE_MASS_GRIDS_V03_MASCON_CRI

## 许可与引用

- 许可：proprietary
- 关键词：grace, gravity, jpl, mascon, mass, nasa, surface-ground-water, tellus, water
- 数据引用：D.N. Wiese. 2015. GRACE monthly global water mass grids NETCDF
RELEASE 6.1. Ver. 3.0. PO.DAAC, CA, USA.. Dataset accessed [YYYY-MM-DD] at
[https://doi.org/10.5067/TEMSC-3JC63](https://doi.org/10.5067/TEMSC-3JC63).


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GRACE Monthly Mass Grids Release 06 Version 04 - Land](/pages/d281cddf/)
- [GRACE Monthly Mass Grids Release 6.3 Version 4 - Global Mascons](/pages/180b7c10/)
- [GRACE Monthly Mass Grids Version 04 - Global Mascon (CRI Filtered)](/pages/78028c87/)
- [GRACE Monthly Mass Grids - Global Mascon (CRI Filtered) [deprecated]](/pages/920d14b8/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
