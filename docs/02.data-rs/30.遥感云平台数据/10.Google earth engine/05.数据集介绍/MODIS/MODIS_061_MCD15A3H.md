---
title: "MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米"
date: 2026-11-03 12:00:00
permalink: /pages/4b457845/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "4-day"
  - "fpar"
  - "global"
  - "lai"
  - "mcd15a3h"
  - "modis"
  - "nasa"
  - "plant-productivity"
  - "usgs"
  - "vegetation"
---

# MCD15A3H.061 MODIS 叶面积指数/FPAR 4 天全球 500 米

英文原名：MCD15A3H.061 MODIS Leaf Area Index/FPAR 4-Day Global 500m

## 这是什么数据

MCD15A3H 版本 6.1 中分辨率成像光谱仪（MODIS）四级、组合光合有效辐射分量（FPAR）与叶面积指数（LAI）产品是一个像元大小 500 米的 4 天合成数据集。算法从 4 天时段内 NASA 的 Terra 与 Aqua 卫星上两个 MODIS 传感器的所有获取中选择最佳像元。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2002 年至 2026 年；分辨率：500 米。
- 时间范围：2002-07-04 至 2026-10-24

## 分辨率与规格

- 空间分辨率：约 500 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| Fpar | 植被冠层绿色元素吸收的 FPAR。 | 500 | 400-700nm |
| Lai | 阔叶冠层单位地面面积的单侧绿叶面积；针叶冠层单位地面面积的总针叶表面积的一半。 | 500 |  |
| FparLai_QC | Lai 与 Fpar 的质量。 | 500 |  |
| FparExtra_QC | LAI 与 FPAR 的额外细节质量。 | 500 |  |
| FparStdDev | Fpar 的标准差。 | 500 |  |
| LaiStdDev | Lai 的标准差。 | 500 |  |

## 能拿来做什么

- 土地覆盖与植被监测
- 全球变化研究
- 遥感算法验证

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('MODIS/061/MCD15A3H');
```

- 数据集编号（Earth Engine ID）：`MODIS/061/MCD15A3H`
- 提供方：NASA LP DAAC at the USGS EROS Center、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/MODIS_061_MCD15A3H
* [User's Guide](https://lpdaac.usgs.gov/documents/624/MOD15_User_Guide_V6.pdf)
* [Algorithm Theoretical Basis Document (ATBD)](https://lpdaac.usgs.gov/documents/90/MOD15_ATBD.pdf)
* [General Documentation](https://ladsweb.modaps.eosdis.nasa.gov/filespec/MODIS/61/MCD15A3H)

## 许可与引用

- 许可：proprietary
- 关键词：4-day, fpar, global, lai, mcd15a3h, modis, nasa, plant-productivity, usgs, vegetation
- 数据引用：Please visit [LP DAAC 'Citing Our Data' page](https://lpdaac.usgs.gov/citing_our_data)
for information on citing LP DAAC datasets.

- DOI：10.5067/MODIS/MCD15A3H.061

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [MOD13A1.061 Terra Vegetation Indices 16-Day Global 500m](/pages/d6ab7a99/)
- [MOD13A2.061 Terra Vegetation Indices 16-Day Global 1km](/pages/d5e48b42/)
- [MOD13A3.061 Vegetation Indices Monthly L3 Global 1 km SIN Grid](/pages/9a6615e4/)
- [MOD13C1.061: Terra Vegetation Indices 16-Day L3 Global 0.05 Deg Climate Modeling Grid](/pages/7cbb8070/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
