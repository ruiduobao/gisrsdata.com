---
title: "MYD09CMG.061 Aqua 地表反射率日 L3 全球 0.05 度 CMG"
date: 2026-11-03 12:00:00
permalink: /pages/b472e2a6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "aqua"
  - "brightness-temperature"
  - "ozone"
  - "satellite-imagery"
  - "surface-reflectance"
---

# MYD09CMG.061 Aqua 地表反射率日 L3 全球 0.05 度 CMG

英文原名：MYD09CMG.061 Aqua Surface Reflectance Daily L3 Global 0.05 Deg CMG

## 这是什么数据

MYD09CMG 版本 6.1 产品提供 Aqua 中分辨率成像光谱仪（MODIS）波段 1 至 7 的地表光谱反射率估计，重采样到 5,600 米像元分辨率，并已对气体、气溶胶与瑞利散射等大气条件做了校正。MYD09CMG 数据产品提供 25 个层，包括 MODIS 波段 1 至 7；来自热波段 20、21、31 与 32 的亮温数据；以及质量保证（QA）与观测波段。本产品基于气候建模网格（CMG），用于气候模拟模型。

本数据集存在源自波段 5 失效探测器 20 的条带问题。MYD09/波段 5 在波段 5 中显示失效探测器条带，但它已在 QA 层中被正确标记。科学团队已获通知，该问题将在第 7 集合中解决。更多细节见[已知问题页面](https://landweb.modaps.eosdis.nasa.gov/displayissue?id=939)。

注意，MODIS 文档中为 MYD09CMG 波段描述的比例因子与偏移已应用于摄入 Earth Engine 的资产。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：5,600 米。
- 时间范围：2002-07-04 至 2026-10-31

## 分辨率与规格

- 空间分辨率：约 5,600 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Coarse_Resolution_Surface_Reflectance_Band_1 | 波段 1 的地表反射率。 | 5600 | 620-670nm |
| Coarse_Resolution_Surface_Reflectance_Band_2 | 波段 2 的地表反射率。 | 5600 | 841-876nm |
| Coarse_Resolution_Surface_Reflectance_Band_3 | 波段 3 的地表反射率。 | 5600 | 459-479nm |
| Coarse_Resolution_Surface_Reflectance_Band_4 | 波段 4 的地表反射率。 | 5600 | 545-565nm |
| Coarse_Resolution_Surface_Reflectance_Band_5 | 波段 5 的地表反射率。 | 5600 | 1230-1250nm |
| Coarse_Resolution_Surface_Reflectance_Band_6 | 波段 6 的地表反射率。 | 5600 | 1628-1652nm |
| Coarse_Resolution_Surface_Reflectance_Band_7 | 波段 7 的地表反射率。 | 5600 | 2105-2155nm |
| Coarse_Resolution_Solar_Zenith_Angle | 太阳天顶角。 | 5600 |  |
| Coarse_Resolution_View_Zenith_Angle | 观测天顶角。 | 5600 |  |
| Coarse_Resolution_Relative_Azimuth_Angle | 相对方位角。 | 5600 |  |
| Coarse_Resolution_Ozone | 臭氧分辨率。 | 5600 |  |
| Coarse_Resolution_Brightness_Temperature_Band_20 | 波段 20 亮温。 | 5600 | 3.360-3.840&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_21 | 波段 21 亮温。 | 5600 | 3.929-3.989&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_31 | 波段 31 亮温。 | 5600 | 10.780-11.280&micro;m |
| Coarse_Resolution_Brightness_Temperature_Band_32 | 波段 32 亮温。 | 5600 | 11.770-12.270&micro;m |
| Coarse_Resolution_Granule_Time | 一天中的颗粒时间，格式为 HHMM。 | 5600 |  |
| Coarse_Resolution_Band_3_Path_Radiance | 波段 3 辐射。 | 5600 |  |
| Coarse_Resolution_QA | 质量保证。 | 5600 |  |
| Coarse_Resolution_Internal_CM | 内部云掩膜。 | 5600 |  |
| Coarse_Resolution_State_QA | 状态质量保证。 | 5600 |  |
| Coarse_Resolution_Number_Mapping | 数量映射云/雪。 | 5600 |  |
| number_of_500m_pixels_averaged_b3 | 平均中使用的 500 米像元数。 | 5600 |  |
| number_of_500m_rej_detector | 被拒绝使用的 500 米像元数。 | 5600 |  |
| number_of_250m_pixels_averaged_b1-2 | b1-2 平均中使用的 250 米像元数。 | 5600 |  |
| n_pixels_averaged | 平均中使用的像元数。 | 5600 |  |

## 能拿来做什么

- 地表反射率与土地覆盖分析
- 植被与物候监测
- 大气校正研究

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MYD09CMG');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MYD09CMG`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MYD09CMG
* [User's Guide](https://lpdaac.usgs.gov/documents/925/MOD09_User_Guide_V61.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/305/MOD09_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MYD09CMG)

## 许可与引用

- 许可：proprietary
- 关键词：aqua, brightness-temperature, ozone, satellite-imagery, surface-reflectance
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MYD09CMG.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MCD19A1.061: Land Surface BRF Daily L2G Global 500m and 1km](/pages/18647d64/)
- [MCD43A1.061 MODIS BRDF-Albedo Model Parameters Daily 500m](/pages/568e60e0/)
- [MCD43A2.061 MODIS BRDF-Albedo Quality Daily 500m](/pages/cc1794f9/)
- [MCD43A3.061 MODIS Albedo Daily 500m](/pages/80cc401f/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
