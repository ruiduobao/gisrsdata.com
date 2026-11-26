---
title: "哨兵-5P 离线对流层臭氧（L3）"
date: 2026-11-03 12:00:00
permalink: /pages/469453b0/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "air-quality"
  - "atmosphere"
  - "copernicus"
  - "esa"
  - "eu"
  - "o3"
  - "ozone"
  - "pollution"
  - "s5p"
  - "sentinel"
  - "tropomi"
---

# 哨兵-5P 离线对流层臭氧（L3）

英文原名：Sentinel-5P OFFL O3 TCL: Offline Tropospheric Ozone

## 这是什么数据

本数据集提供北纬 20 度至南纬 20 度之间对流层臭氧浓度的离线高分辨率影像。臭氧总柱数据另见 COPERNICUS/S5P/OFFL/L3_O3 和 COPERNICUS/S5P/NRTI/L3_O3。

在平流层，臭氧层保护生物圈免受危险的太阳紫外辐射。在对流层，臭氧是高效的清洁剂，但高浓度时也会危害人类、动物和植被健康。臭氧还是当前气候变化的重要温室气体贡献者。自 1980 年代发现南极臭氧洞、随后《蒙特利尔议定书》管控含氯臭氧消耗物质的生产以来，臭氧一直从地面和太空常规监测。

本产品使用对流云差分（CCD）和云切片（CSA）算法。[产品用户手册。](https://sentinels.copernicus.eu/documents/247904/2474726/Sentinel-5P-Level-2-Product-User-Manual-Ozone-Tropospheric-Column)[更多信息。](http://www.tropomi.eu/data-products/tropospheric-ozone-column)

哨兵-5 先导星是欧洲空间局于 2017 年 10 月 13 日发射的空气污染监测卫星，星上传感器常被称为 Tropomi（对流层监测仪）。除 CH4 外，全部 S5P 数据集都有近实时（NRTI）和离线（OFFL）两个版本，CH4 只有 OFFL 版。NRTI 资产覆盖面积比 OFFL 小，但采集后出现得更快；OFFL 资产是单轨数据（因半个地球处于黑夜，实际只含一个半球）。

原始哨兵-5P 二级（L2）数据按时间分箱，而不是按经纬度。为摄入 Earth Engine，每个 L2 产品被转换为 L3，每轨保留一个网格（不跨产品聚合）；跨越反经线的源产品摄入为后缀 _1、_2 的两个资产。L3 转换由 [harpconvert](https://cdn.rawgit.com/stcorp/harp/master/doc/html/harpconvert.html) 工具用 bin_spatial 操作完成。源数据会过滤掉 QA 值低于以下阈值的像元：AER_AI 为 80%；NO2 的 tropospheric_NO2_column_number_density 波段为 75%；除 O3 和 SO2 外的其他数据集为 50%。注意：O3_TCL 产品本身是直接摄入的（不运行 harpconvert）。

## 覆盖范围与时间

- 覆盖范围：热带地区（北纬 20 度至南纬 20 度之间）
- 时间范围：2018-04-30 至 2026-10-18

## 分辨率与规格

- 空间分辨率：约 111,320 米（约 111.32 公里）
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| ozone_tropospheric_mixing_ratio | 基于 CCD 算法的对流层臭氧平均混合比 | 111320 |  |
| ozone_tropospheric_mixing_ratio_precision | 基于 CCD 算法的对流层臭氧混合比的标准差 | 111320 |  |
| ozone_tropospheric_vertical_column | 基于 CCD 算法的对流层臭氧平均垂直柱 | 111320 |  |
| ozone_tropospheric_vertical_column_precision | 基于 CCD 算法的对流层臭氧柱的标准差 | 111320 |  |
| qa_value | 连续质量描述符，从 0（无数据）到 100（全质量数据） | 111320 |  |

## 能拿来做什么

- 热带对流层臭氧监测
- 生物质燃烧与闪电 NOx 影响研究
- 温室气体（对流层臭氧）评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_O3_TCL');
```

- 数据集编号（Earth Engine ID）：`COPERNICUS/S5P/OFFL/L3_O3_TCL`
- 提供方：European Union/ESA/Copernicus、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_O3_TCL

## 许可与引用

- 许可：proprietary
- 关键词：air-quality, atmosphere, copernicus, esa, eu, o3, ozone, pollution, s5p, sentinel, tropomi
> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [哨兵-5P 离线一氧化碳（L3）](/pages/0bd864c8/)
- [哨兵-5P 离线二氧化氮（L3）](/pages/7fe826cd/)
- [哨兵-5P 离线二氧化硫（L3）](/pages/eff44f62/)
- [哨兵-5P 离线云属性（L3）](/pages/f29bba93/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
