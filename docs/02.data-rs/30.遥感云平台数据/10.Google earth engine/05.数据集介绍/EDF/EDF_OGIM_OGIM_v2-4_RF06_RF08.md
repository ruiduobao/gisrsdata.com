---
title: "OGIM：油气基础设施制图数据库 v2-4 RF06/RF08（已弃用）"
date: 2026-11-03 12:00:00
permalink: /pages/60f47371/
categories:
  - data-rs
  - 遥感云平台数据
  - Google earth engine
tags:
  - "edf"
  - "emissions"
  - "ghg"
  - "infrastructure-boundaries"
  - "methane"
  - "methaneair"
  - "methanesat"
  - "table"
---

# OGIM：油气基础设施制图数据库 v2-4 RF06/RF08（已弃用）

英文原名：OGIM: Oil and Gas Infrastructure Mapping Database vv2-4_RF06_RF08 [deprecated]

## 这是什么数据

本数据集提供美国两个关键油气产区内油气（O&G）相关基础设施的位置：得克萨斯州西部与新墨西哥州南部的 Permian 盆地 Delaware 子盆地，以及犹他州的 Uinta 盆地。

油气基础设施制图（OGIM）数据库是环境保护基金（EDF）与 [MethaneSAT LLC](https://www.methanesat.org/)（EDF 的全资子公司）开发的一个项目。开发 OGIM 这样标准化的油气基础设施数据库的首要目标，是支持 MethaneSAT 对油气行业甲烷排放的排放量化、源特征刻画及其他科学与倡导相关的分析。OGIM 数据库基于对公开可得的油气设施地理空间数据源的获取、分析与质量保证，将它们合并到一个标准数据模式与坐标参考系中。

本数据集包含以下类型基础设施资产的空间位置：

* 油气井，
* 天然气压缩站，
* 集输与处理设施，
* 石油终端，
* 油气管道，
* 卫星探测的油气火炬，
* 以及「其他」油气相关基础设施，如计量站。

OGIM 中的记录汇编自众多公开可得的政府与学术来源，包括：

本数据集中的油气设施在空间上与 MethaneAIR 于 2021 年 8 月 8 日在 Permian 盆地上空（研究飞行 RF06）及 2021 年 8 月 11 日在 Uinta 盆地上空（研究飞行 RF08）的测量范围一致。MethaneAIR 是 MethaneSAT 卫星任务的机载先行者，由 MethaneSAT LLC 管理。本次数据发布仅包含位于 RF06 或 RF08 关注区域内的油气设施。

关于这些设施位置相关属性的重要说明：

- 缺失值（即原始数据源缺失或未报告的值）这样处理：字符串属性赋「N/A」，数值属性赋 -999，日期/时间属性赋通用日期「1900-01-01」。

- 设施运营方名称未作任何改动，来自原始数据源，并假定截至原始来源发布之日是准确的。

有关 OGIM 数据库的更多信息，包括其开发方法与主要应用，请参阅 [Omara 等，2023](https://doi.org/10.5194/essd-15-3761-2023) 的近期出版物。

如需了解该项目的更多信息，请通过此链接联系数据提供方：[https://www.methanesat.org/contact/](https://www.methanesat.org/contact/)

## 覆盖范围与时间

- 覆盖范围：美国 Permian 盆地 Delaware 子盆地与 Uinta 盆地
- 时间范围：2023-11-14 至 2023-11-14

## 分辨率与规格

- 数据类型：矢量/表格（FeatureCollection），在 Google Earth Engine 中调用

| 字段 | 类型 | 说明 |
| --- | --- | --- |
| CATEGORY | STRING | 设施所属的油气基础设施类别。取值：GATHERING AND PROCESSING（集输与处理）、NATURAL GAS COMPRESSOR STATION（天然气压缩站）、NATURAL GAS FLARING DETECTIONS（天然气火炬探测）、OIL AND NATURAL GAS WELLS（油气井）、OIL AND NATURAL GAS PIPELINES（油气管道）、PETROLEUM TERMINALS（石油终端）、STATIONS - OTHER（其他站场） |
| FAC_ID | STRING | 原始来源机构用于识别设施的唯一 ID |
| FAC_NAME | STRING | 设施名称 |
| FAC_TYPE | STRING | 设施类型的详细信息 |
| OGIM_ID | INT | geopackage 中每个设施的唯一标识符。取值在不同基础设施类别之间不重复 |
| OGIM_STATUS | STRING | 原始数据源所报告设施状态的标准化版本。原始状态被归入 EDF 定义的 12 个类别之一 |
| OPERATOR | STRING | 设施运营方的名称，依据发布时的原始来源 |
| SRC_DATE | STRING | 获取该记录的数据源的原始发布日期，格式为 YYYY-MM-DD |
| SRC_REF_ID | INT | 将记录与其对应原始数据源关联的 ID 编号。更多信息见随 [Omara 等（2023）](https://doi.org/10.5194/essd-15-3761-2023) 的 GeoPackage 中的「Data_Catalog」表。取值：87、91、93、94、95 与 96 = HIFLD；89 = EPA FLIGHT；90 = Marchese 等（2015）；142 = Earth Observation Group；197 与 217 = TX RRC；210 = NM EMNRD；218 = UGRC |
| STATE_PROV | STRING | 设施所在的州或省。取值：TEXAS、NEW_MEXICO、UTAH、N/A |

## 能拿来做什么

- 油气基础设施空间清单
- 甲烷排放源的定位与核对
- 油气产区设施分布制图

## 怎么获取

在 Earth Engine 中调用：

```js
var dataset = ee.FeatureCollection('EDF/OGIM/OGIM_v2-4_RF06_RF08');
```

- 数据集编号（Earth Engine ID）：`EDF/OGIM/OGIM_v2-4_RF06_RF08`
- 提供方：Environmental Defense Fund - MethaneSAT、Google Earth Engine
- 官方介绍：https://developers.google.com/earth-engine/datasets/catalog/EDF_OGIM_OGIM_v2-4_RF06_RF08
* [Homeland Infrastructure Foundation-Level Data (HIFLD)](https://hifld-geoplatform.hub.arcgis.com/pages/hifld-open)
* [EPA Facility Level Information on Greenhouse Gases Tool (FLIGHT)](https://ghgdata.epa.gov/ghgp/main.do)
* [Texas Railroad Commission (RRC)](https://www.rrc.texas.gov/resource-center/research/data-sets-available-for-download/)
* [New Mexico Energy Minerals, and Natural Resources Department (EMNRD)](https://ocd-hub-nm-emnrd.hub.arcgis.com/datasets/dd971b8e25c54d1a8ab7c549244cf3cc_0/about)
* [Utah Geospatial Resource Center (UGRC)](https://gis.utah.gov/data/energy/oil-gas/)
* [Earth Observation Group (EOG) at the Colorado School of Mines](https://eogdata.mines.edu/products/vnf/global_gas_flare.html)
* [Marchese et al, 2015](https://doi.org/10.1021/acs.est.5b02275)

## 许可与引用

- 许可：CC-BY-4.0
- 关键词：edf, emissions, ghg, infrastructure-boundaries, methane, methaneair, methanesat, table
- 数据引用：Omara, M., Gautam, R., O'Brien, M., Himmelberger, A., Franco, A.,
Meisenhelder, K., Hauser, G., Lyon, D., Chulakadaba, A., Miller, C. and
Franklin, J., 2023. Developing a spatially explicit global oil and gas
infrastructure database for characterizing methane emission sources at high
resolution. Earth System Science Data Discussions, 2023, pp.1-35.
[doi:10.5194/essd-15-3761-2023](https://doi.org/10.5194/essd-15-3761-2023),

- DOI：10.5194/essd-15-3761-2023

> 本页介绍整理自 Google Earth Engine 官方数据目录（STAC），文字与元数据的版权归数据提供方所有。

## 同类数据

- [OGIM: Oil and Gas Infrastructure Mapping Database v2.5.1](/pages/ef98f7b4/)
- [1比100万基础地理信息](/pages/ee94f8/)
- [Designation: USGS GAP PAD-US v2.0](/pages/3a617def/)
- [ESA WorldCereal AEZ v100](/pages/1c72ec66/)

> **注意：该数据集已被官方标记为弃用（deprecated），请优先考虑其替代产品。**
