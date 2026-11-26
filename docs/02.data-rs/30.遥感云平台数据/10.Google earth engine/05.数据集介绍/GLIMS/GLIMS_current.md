---
title: "GLIMS 当前版：全球陆地冰空间测量"
date: 2026-11-03 12:00:00
permalink: /pages/a3ca23c6/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "cryosphere"
  - "glacier"
  - "glims"
  - "ice"
  - "landcover"
  - "nasa"
  - "nsidc"
  - "snow"
  - "table"
---

# GLIMS 当前版：全球陆地冰空间测量

英文原名：GLIMS Current: Global Land Ice Measurements From Space

## 这是什么数据

全球陆地冰空间测量（GLIMS）是一项国际倡议，目标是反复测量世界上估计约 200,000 条冰川。

该项目旨在创建一个全球综合的陆地冰清单，包括冰川面积、几何形态、表面流速和雪线高程的测量。为进行这些分析，GLIMS 项目使用卫星数据，主要来自高级星载热发射与反射辐射计（ASTER）和 Landsat 增强专题制图仪 Plus（ETM+），以及源自地图和航空照片的历史信息。

该数据集中的每个要素都是分析时一条冰川的多边形边界。少数冰川 ID 随时间有数百行不同的记录。

该数据集是截至 2023 年 6 月 7 日的冰川边界清单快照，提供超过 1,100,000 行记录。

## 覆盖范围与时间

- 覆盖范围：全球冰川区
- 时间范围：1750-01-01 至 2023-06-07

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| analysts | STRING | 数据贡献者的姓名 |
| anlys_id | DOUBLE | 特定时间一条冰川的 ID |
| anlys_time | STRING | 分析完成的时间 |
| area | DOUBLE | 地图投影平面上冰川的面积（平方公里） |
| chief_affl | STRING | 区域中心负责人的所属机构 |
| db_area | DOUBLE | 与「area」相同，但由 GLIMS 项目重新计算 |
| geog_area | STRING | 区域中心覆盖的地理区域名称 |
| glac_id | STRING | GLIMS 冰川 ID |
| glac_name | STRING | 冰川名称。约 80% 的行等于「None」 |
| glac_stat | STRING | 冰川状态，为「exists」或「None」 |
| length | DOUBLE | 冰川周长（米） |
| line_type | STRING | 冰川记录类型，如冰川为「glac_bound」，内部岩石、雪线、水体要素等为其他值 |
| local_id | STRING | 由贡献机构或区域中心分配的 ID |
| max_elev | DOUBLE | 冰川的最高处（海拔米） |
| mean_elev | DOUBLE | 冰川的平均高程（海拔米） |
| min_elev | DOUBLE | 冰川的最低处（海拔米） |
| parent_id | STRING | 该冰川的母冰川的 ID |
| primeclass | DOUBLE | WGMS 冰川分类编号 |
| proc_desc | STRING | 对该记录所做处理的描述 |
| rc_id | DOUBLE | 区域中心使用的 ID |
| rec_status | STRING | 记录状态 |
| release_dt | STRING | 数据发布的日期，格式为 YYYY-MM-ddTHH:mm:ss |
| src_date | STRING | 用于创建轮廓的源影像日期 |
| subm_id | DOUBLE | GLIMS 分配的提交 ID |
| submitters | STRING | 数据提交者的姓名 |
| wgms_id | STRING | 世界冰川监测服务处（WGMS）ID |
| width | DOUBLE | 冰川的宽度（米） |

## 能拿来做什么

- 全球冰川清单与面积统计
- 冰川变化与海平面上升研究
- 冰川编目与数据汇交

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('GLIMS/current');
```

- 数据集编号（Earth Engine ID）：`GLIMS/current`
- 提供方：National Snow and Ice Data Center (NSDIC)、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/GLIMS_current

## 许可与引用

- 许可：proprietary
- 关键词：cryosphere, glacier, glims, ice, landcover, nasa, nsidc, snow, table
- DOI：10.7265/N5V98602

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [ECMWF 近实时 IFS 大气预报](/pages/3fdfa56d/)
- [ERA5-Land 按日内时刻月平均数据 — ECMWF 气候再分析](/pages/39c04517/)
- [ERA5-Land 月聚合数据 — ECMWF 气候再分析](/pages/0889ecdc/)
- [ERA5-Land 逐小时数据 — ECMWF 气候再分析](/pages/0a0b8372/)

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。
