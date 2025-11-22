import React from 'react';
import {
  // Compute
  AzVirtualMachine,
  AzCloudService,
  AzFunctions,
  AzContainerService,
  AzBatch,

  // Storage
  AzStorage,
  AzStorageBlob,
  AzStorageFiles,
  AzStorageQueue,

  // Database
  AzDocumentDB, // Nome anterior do Cosmos DB
  AzSQLDatabase,
  AzCacheincludingRedis,
  AzHDInsight, // Hadoop & Analytics
  AzDatabricks,

  // Networking & Content Delivery
  AzVirtualNetwork,
  AzLoadBalancer,
  AzContentDeliveryNetwork,
  APIManagement,
  AzVPNGateway,
  AzExpressRoute,
  AzTrafficManager,

  // Security & Identity
  ActiveDirectory, // Agora Microsoft Entra ID
  AzKeyVault,
  AzSecurityCenter,
  AzRightsManagement,
  AzMultiFactorAuthentication,
  
  // Developer Tools & DevOps (baseado em VSTS)
  VisualStudioTeamServices,
  VisualStudioTeamServicesGitHub,
  
  // Management & Governance
  AzMonitor,
  AzAutomation,
  AzAdvisor,
  
  // Application Integration
  AzServiceBus,
  AzEventHubs,
  AzLogicApps,
  AzNotificationHubs,

} from 'azure-react-icons';

const azureIcons = [
  {
    category: "Compute",
    icons: [
      { component: AzVirtualMachine, id: "az-virtual-machine", label: "Azure Virtual Machine" },
      { component: AzCloudService, id: "az-cloud-service", label: "Azure Cloud Service" },
      { component: AzFunctions, id: "az-functions", label: "Azure Functions" },
      { component: AzContainerService, id: "az-container-service", label: "Azure Container Service" },
      { component: AzBatch, id: "az-batch", label: "Azure Batch" },
    ],
  },
  {
    category: "Storage",
    icons: [
      { component: AzStorage, id: "az-storage", label: "Azure Storage Account" },
      { component: AzStorageBlob, id: "az-storage-blob", label: "Azure Storage Blob" },
      { component: AzStorageFiles, id: "az-storage-files", label: "Azure Storage Files" },
      { component: AzStorageQueue, id: "az-storage-queue", label: "Azure Storage Queue" },
    ],
  },
  {
    category: "Database",
    icons: [
      { component: AzDocumentDB, id: "az-documentdb", label: "Azure DocumentDB (Cosmos DB)" },
      { component: AzSQLDatabase, id: "az-sql-database", label: "Azure SQL Database" },
      { component: AzCacheincludingRedis, id: "az-cache-redis", label: "Azure Cache for Redis" },
      { component: AzHDInsight, id: "az-hdinsight", label: "Azure HDInsight" },
      { component: AzDatabricks, id: "az-databricks", label: "Azure Databricks" },
    ],
  },
  {
    category: "Networking",
    icons: [
      { component: AzVirtualNetwork, id: "az-vnet", label: "Azure Virtual Network" },
      { component: AzLoadBalancer, id: "az-load-balancer", label: "Azure Load Balancer" },
      { component: AzContentDeliveryNetwork, id: "az-cdn", label: "Azure CDN" },
      { component: APIManagement, id: "api-management", label: "API Management" },
      { component: AzVPNGateway, id: "az-vpn-gateway", label: "Azure VPN Gateway" },
      { component: AzExpressRoute, id: "az-express-route", label: "Azure ExpressRoute" },
      { component: AzTrafficManager, id: "az-traffic-manager", label: "Azure Traffic Manager" },
    ],
  },
  {
    category: "Security",
    icons: [
      { component: ActiveDirectory, id: "active-directory", label: "Azure Active Directory" },
      { component: AzKeyVault, id: "az-key-vault", label: "Azure Key Vault" },
      { component: AzSecurityCenter, id: "az-security-center", label: "Azure Security Center" },
      { component: AzRightsManagement, id: "az-rights-management", label: "Azure Rights Management" },
      { component: AzMultiFactorAuthentication, id: "az-mfa", label: "Azure MFA" },
    ],
  },
  {
    category: "Tools",
    icons: [
      { component: VisualStudioTeamServices, id: "vsts", label: "Visual Studio Team Services" },
      { component: VisualStudioTeamServicesGitHub, id: "vsts-github", label: "VSTS GitHub Source" },
      // Outras ferramentas de desenvolvimento estariam aqui
    ],
  },
  {
    category: "Management",
    icons: [
      { component: AzMonitor, id: "az-monitor", label: "Azure Monitor" },
      { component: AzAutomation, id: "az-automation", label: "Azure Automation" },
      { component: AzAdvisor, id: "az-advisor", label: "Azure Advisor" },
    ],
  },
  {
    category: "Integration",
    icons: [
      { component: AzServiceBus, id: "az-service-bus", label: "Azure Service Bus" },
      { component: AzEventHubs, id: "az-event-hubs", label: "Azure Event Hubs" },
      { component: AzLogicApps, id: "az-logic-apps", label: "Azure Logic Apps" },
      { component: AzNotificationHubs, id: "az-notification-hubs", label: "Azure Notification Hubs" },
    ],
  },
];

export default azureIcons;