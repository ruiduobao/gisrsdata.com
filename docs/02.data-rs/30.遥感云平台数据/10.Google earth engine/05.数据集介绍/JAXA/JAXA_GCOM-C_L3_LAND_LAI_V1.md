---
title: "GCOM-C/SGLI 三级叶面积指数产品（V1）"
date: 2026-11-03 12:00:00
permalink: /pages/099c4e7b/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "g-portal"
  - "gcom"
  - "gcom-c"
  - "jaxa"
  - "lai"
  - "land"
  - "leaf-area-index"
  - "vegetation-indices"
---

# GCOM-C/SGLI 三级叶面积指数产品（V1）

英文原名：GCOM-C/SGLI L3 Leaf Area Index (V1)

## 这是什么数据

本产品是单位地面面积上单侧绿叶面积之和。

本数据集另有更新的版本 [JAXA/GCOM-C/L3/LAND/LAI/V3](JAXA_GCOM-C_L3_LAND_LAI_V3)，其处理使用此[算法](https://suzaku.eorc.jaxa.jp/GCOM_C/data/product_std.html)。

GCOM-C 开展长期、连续的全球观测与数据收集，以阐明辐射收支与碳循环的波动机制——这是准确预估未来升温所必需的；同时与拥有气候数值模式的研究机构合作，致力于减小气候数值模式的温度上升预估误差、提高各类环境变化预估的精度。搭载于 GCOM-C 的 SGLI 是 ADEOS-II（MIDORI II）所载全球成像仪（GLI）的后继传感器，是一台测量近紫外到热红外区域（380 nm–12 μm）辐射的成像辐射计，共 19 个通道；凭借大于 1,000 km 的地面观测幅宽，可在日本附近中纬度地区实现约每两天一次的全球观测。此外，SGLI 实现了高于同类全球传感器的分辨率，并具备偏振观测功能与多角度观测功能。

## 覆盖范围与时间

- 覆盖范围：覆盖范围：全球；时间范围：2018 年 1 月 1 日至 2020 年 6 月 28 日；分辨率：约 4,638 米。
- 时间范围：2018-01-01 至 2020-06-28

## 分辨率与规格

- 空间分辨率：约 4,638.3 米
- 数据类型：影像集合（ImageCollection），在 Google Earth Engine 中调用

| 波段 | 说明 | 分辨率（米） | 波长 |
| --- | --- | --- | --- |
| LAI_AVE | 单位地面面积上单侧绿叶面积之和。 | 4638.3 |  |
| LAI_QA_flag | LAI 质量标志。 | 4638.3 |  |

## 能拿来做什么

- 植被生长与物候监测
- 碳循环与生态系统模型输入
- 农业估产与干旱评估

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.ImageCollection('JAXA/GCOM-C/L3/LAND/LAI/V1');
```

- 数据集编号（Earth Engine ID）：`JAXA/GCOM-C/L3/LAND/LAI/V1`
- 提供方：Global Change Observation Mission (GCOM)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/JAXA_GCOM-C_L3_LAND_LAI_V1

## 许可与引用

- 许可：proprietary
- 关键词：g-portal, gcom, gcom-c, jaxa, lai, land, leaf-area-index, vegetation-indices
- 数据引用：Ono, Y. (Nov. 2011). GCOM-C1 / SGLI LAI Product Algorithm Theoretical Basis Document
(Version 1). Retrieved from [https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/Ono_Y_ATBD.pdf](https://suzaku.eorc.jaxa.jp/GCOM_C/data/ATBD/ver1/Ono_Y_ATBD.pdf)


> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [GCOM-C/SGLI L3 Leaf Area Index (V2)](/pages/9acc1a9f/)
- [GCOM-C/SGLI L3 Leaf Area Index (V3)](/pages/61d677e1/)
- [CSIRO 全球生物多样性指标](/pages/5e19a751/)
- [ESA CCI 地上生物量（2007、2010、2015–2022，v6.0）](/pages/e9028b43/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
